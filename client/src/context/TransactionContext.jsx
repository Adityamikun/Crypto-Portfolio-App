import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  if (!ethereum) {
    throw new Error("Ethereum object is not available. Please install MetaMask.");
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    if (!ethereum) return alert("Please install MetaMask.");

    try {
      const transactionsContract = createEthereumContract();
      const availableTransactions = await transactionsContract.getAllTransactions();
      const structuredTransactions = availableTransactions.map((transaction) => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: ethers.utils.formatEther(transaction.amount)
      }));
      setTransactions(structuredTransactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install MetaMask.");

    try {
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  const checkIfTransactionsExist = async () => {
    if (!ethereum) return alert("Please install MetaMask.");

    try {
      const transactionsContract = createEthereumContract();
      const currentTransactionCount = await transactionsContract.getTransactionCount();
      window.localStorage.setItem("transactionCount", currentTransactionCount);
    } catch (error) {
      console.error("Error checking transaction existence:", error);
    }
  };

  const connectWallet = async () => {
    if (!ethereum) return alert("Please install MetaMask.");

    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const sendTransaction = async () => {
    if (!ethereum) return alert("Please install MetaMask.");

    try {
      const { addressTo, amount, keyword, message } = formData;
      const transactionsContract = createEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      // Send transaction
      const tx = await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: "0x5208", // 21000 Gwei
          value: parsedAmount._hex,
        }],
      });

      setIsLoading(true);
      console.log(`Loading - ${tx}`);
      await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
      console.log(`Transaction Hash - ${tx}`);

      const receipt = await transactionsContract.wait(tx);
      console.log(`Success - ${receipt.transactionHash}`);
      setIsLoading(false);

      const transactionsCount = await transactionsContract.getTransactionCount();
      setTransactionCount(transactionsCount.toNumber());
      window.localStorage.setItem("transactionCount", transactionsCount.toNumber());
      window.location.reload();
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
