import { defineConfig } from "hardhat/config";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";

export default defineConfig({
  // In Hardhat 3, you MUST list your plugins here
  plugins: [hardhatEthers], 
  solidity: {
    version: "0.8.28",
  },
});