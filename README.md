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

```bash
git clone https://github.com/Adityamikun/Crypto-Portfolio-App.git
cd Crypto-Portfolio-App

2. Install Dependencies
Frontend -
Navigate to the client directory and install the necessary dependencies:

bash
Copy code
cd client
npm install
Smart Contracts
Navigate to the smart_contract directory and install the necessary dependencies:

bash
Copy code
cd smart_contract
npm install

3. Configure Environment Variables
Create a .env file in the smart_contract directory with the following content:

env
Copy code
ALCHEMY_API_KEY=<Your_Alchemy_API_Key>
PRIVATE_KEY=<Your_Private_Wallet_Key>
Replace <Your_Alchemy_API_Key> and <Your_Private_Wallet_Key> with your actual credentials.

4. Compile and Deploy Smart Contracts
Compile and deploy the smart contracts by running:

bash
Copy code
cd smart_contract
npx hardhat compile
npx hardhat run scripts/deploy.js --network <network-name>
Replace <network-name> with your chosen Ethereum network (e.g., rinkeby, mainnet).

5. Start the Frontend
Run the following command to start the frontend development server:

bash
Copy code
cd client
npm run dev
Visit http://localhost:3000 in your browser to view the application.

Getting Help
If you encounter any issues or have questions, please check the following resources:

GitHub Issues: Report bugs or request features.
Documentation: Check the documentation for detailed setup and configuration instructions.
Community Forums: Join discussions or seek help from the community.
Contributing
Contributions are welcome! To contribute to the project:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit (git commit -m 'Add Your Feature').
Push to your forked repository (git push origin feature/YourFeature).
Submit a pull request on GitHub.
Maintainers
Aditya Narayan Sahoo - Your GitHub Profile
Other Contributors: Check the contributors section in the GitHub repository.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For further questions or inquiries, you can reach out to:

Aditya Narayan Sahoo - Your Email
Project Link: Crypto Portfolio App

markdown
Copy code

### Key Sections:
- **Overview:** Explains what the project does and why it’s useful.
- **Getting Started:** Provides clear instructions on how to set up and run the project.
- **Getting Help:** Offers resources for users needing assistance.
- **Contributing:** Describes how others can contribute to the project.
- **Maintainers:** Lists the primary maintainers and contributors.
- **License:** Includes the license information.

Feel free to adjust the placeholders and details according to your project’s specifics and preferences!