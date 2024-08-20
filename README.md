# Crypto Portfolio App

## Overview

The Crypto Portfolio App is a web-based application designed to manage and track cryptocurrency transactions on the Ethereum blockchain. This application allows users to connect their Ethereum wallet via MetaMask, send and receive ETH, and view their transaction history with a clean and responsive user interface.

## Why This Project Is Useful

With the increasing popularity of cryptocurrencies, managing and tracking transactions can become cumbersome. The Crypto Portfolio App simplifies this by providing:

- **Real-Time Transactions:** Easily send and receive ETH with live transaction status updates.
- **Transaction History:** View a comprehensive history of all transactions including timestamps and amounts.
- **Wallet Integration:** Seamlessly connect and manage your Ethereum wallet.
- **Responsive Design:** Access the application from any device, ensuring a smooth experience whether on desktop or mobile.

## Getting Started

To get started with the Crypto Portfolio App, follow these steps:

### 1. Clone the Repository


git clone https://github.com/Adityamikun/Crypto-Portfolio-App.git

cd Crypto-Portfolio-App

### 2. Install Dependencies

### 2.1 Frontend -
Navigate to the client directory and install the necessary dependencies:

cd client

npm install

### 2.2 Smart Contracts
Navigate to the smart_contract directory and install the necessary dependencies:

cd smart_contract

npm install

### 2.3 Configure Environment Variables
Create a .env file in the smart_contract directory with the following content:

ALCHEMY_API_KEY=<Your_Alchemy_API_Key>

PRIVATE_KEY=<Your_Private_Wallet_Key>

Replace <Your_Alchemy_API_Key> and <Your_Private_Wallet_Key> with your actual credentials.

### 2.4 Compile and Deploy Smart Contracts
Compile and deploy the smart contracts by running:

cd smart_contract

npx hardhat compile

npx hardhat run scripts/deploy.js --network <network-name>

Replace <network-name> with your chosen Ethereum network (e.g., sepolia, mainnet).

### 2.5 Start the Frontend
Run the following command to start the frontend development server:

cd client

npm run dev

Visit http://localhost:3000 in your browser to view the application.

### 3. Getting Help
If you encounter any issues or have questions, please check the following resources:

GitHub Issues: Report bugs or request features.

Documentation: Check the documentation for detailed setup and configuration instructions.

Community Forums: Join discussions or seek help from the community.


### 4. Contributing
Contributions are welcome! To contribute to the project:

1.Fork the repository.

2.Create a new branch (git checkout -b feature/YourFeature).

3.Make your changes and commit (git commit -m 'Add Your Feature').

4.Push to your forked repository (git push origin feature/YourFeature).

5.Submit a pull request on GitHub.

### 5. Deployment
The Crypto Portfolio App is deployed and accessible online. You can view the live application at:

https://66c4db455f3ace2da8289faa--glittering-axolotl-a743ab.netlify.app/

### 6. Maintainers
Aditya Narayan Sahoo - https://github.com/Adityamikun


### 1.Contact
For further questions or inquiries, you can reach out to:

Aditya Narayan Sahoo - narayanaditaydr42@gmail.com


