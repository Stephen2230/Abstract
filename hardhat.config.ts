import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

import "@matterlabs/hardhat-zksync-verify";

// dynamically changes endpoints for local tests
export const zkSyncTestnet =
  process.env.NODE_ENV == "test"
    ? {
        url: "http://127.0.0.1:8011",
        ethNetwork: "http://127.0.0.1:8045",
        zksync: true,
      }
    : {
        url: "https://testnet.era.zksync.dev",
        ethNetwork: "goerli",
        zksync: true,
        // contract verification endpoint
        verifyURL:
          "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
      };

      const config: HardhatUserConfig = {
        zksolc: {
          version: "latest", // Uses latest available in https://github.com/matter-labs/zksolc-bin/
          settings: {
            isSystem: true, // make sure to include this line
          },
        },
        defaultNetwork: "zkSyncTestnet",
      
        networks: {
          zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
            zksync: true,
          },
        },
        solidity: {
          version: "0.8.17",
        },
      };
      
      export default config;
