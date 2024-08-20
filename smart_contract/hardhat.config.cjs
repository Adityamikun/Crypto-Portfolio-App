require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/XpOAHAMfFChtFskJPUY4u2trZYJ29hr4',
      accounts: ['2a6e7ac94a966af6311e27f9822e83aaf40632e55a6afe12ddaf6f71206d9905'],
    },
  },
};



