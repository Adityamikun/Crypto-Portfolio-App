async function main() {
    // Get the contract factory
    const Transactions = await ethers.getContractFactory("Transactions");
  
    // Deploy the contract
    const transactionsContract = await Transactions.deploy();
  
    // Wait for the deployment to be mined
    await transactionsContract.deployTransaction.wait();
  
    // Log the address of the deployed contract
    console.log("Transactions contract deployed to:", transactionsContract.address);
  }
  
  // Run the main function and handle errors
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
  