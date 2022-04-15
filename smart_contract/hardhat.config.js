// https://eth-ropsten.alchemyapi.io/v2/r0HRBYEM4KESZ1YPOcDYuRayNM4m-4hS

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/r0HRBYEM4KESZ1YPOcDYuRayNM4m-4hS",
      accounts: [
        "f9322b193f5db09cc58e6915e5179e81b4258e67f47110404485cfa0313e7ec7",
      ],
    },
  },
};
