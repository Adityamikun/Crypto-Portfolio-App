// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;


contract Transactions {
    uint256 private transactionCount;

    event Transfer(address indexed from, address indexed receiver, uint amount, string message, uint256 timestamp, string keyword);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] private transactions;

    /**
     * @dev Add a new transaction to the blockchain.
     * @param receiver Address of the receiver.
     * @param amount Amount to be transferred.
     * @param message Message associated with the transaction.
     * @param keyword Keyword associated with the transaction.
     */
    function addToBlockchain(
        address payable receiver, 
        uint amount, 
        string memory message, 
        string memory keyword
    ) public {
        require(amount > 0, "Amount should be greater than zero");
        require(receiver != address(0), "Invalid receiver address");
        
        transactionCount += 1;
        transactions.push(TransferStruct({
            sender: msg.sender,
            receiver: receiver,
            amount: amount,
            message: message,
            timestamp: block.timestamp,
            keyword: keyword
        }));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    /**
     * @dev Get all transactions.
     * @return Array of all transactions.
     */
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    /**
     * @dev Get the total transaction count.
     * @return Number of transactions.
     */
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
