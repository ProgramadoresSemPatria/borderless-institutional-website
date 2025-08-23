interface Week {
  title: string;
  content: string[];
  length: string;
  extra?: string;
}

export interface Module {
  title: string;
  goal: string;
  weeks: Week[];
}

export const modules: Module[] = [
  {
    title: "Foundations of Web3 (Weeks 1-4)",
    goal: "Build conceptual literacy around decentralized ledgers and crypto-assets",
    weeks: [
      {
        title: "Week 1: Blockchain & Crypto Fundamentals",
        content: [
          "Blocks, chains, hashing, signatures, Merkle Trees",
          "PoW vs PoS consensus",
          "Bitcoin & UTXO model",
        ],
        length: "4h",
        extra: "📖 Self-study: Satoshi Whitepaper",
      },
      {
        title: "Week 2: Ethereum, EVM & Smart Contracts",
        content: ["Ethereum accounts, transactions, gas", "Solidity intro"],
        length: "6h",
        extra: "💻 Homework: Deploy 'Hello World' with Remix IDE",
      },
      {
        title: "Weeks 3–4: Token Standards + Core Primitives",
        content: [
          "ERC-20, ERC-721, ERC-1155",
          "Oracles, IPFS, Arweave, Filecoin",
          "L2 vs L3 (Arbitrum, Optimism, StarkNet, zkSync)",
          "ZK proofs: SNARKs vs STARKs",
        ],
        length: "5h",
        extra: "✅ Mini Project: Deploy ERC-20 + basic frontend on L2 testnet",
      },
    ],
  },
  {
    title: "Development Tracks (Weeks 5-8)",
    goal: "Move from theory to building on-chain logic",
    weeks: [
      {
        title: "Solidity (40%)",
        content: [
          "Advanced patterns & security (reentrancy, overflow)",
          "DeFi primitives: AMMs, lending, staking",
        ],
        length: "12h",
        extra: "💻 Build: Token swap dApp + DAO voting contract",
      },
      {
        title: "Rust (40%) – Solana Focus",
        content: ["Anchor framework & Solana accounts model"],
        length: "12h",
        extra: "💻 Build: NFT minting + auction dApp",
      },
      {
        title: "GoLang (10%) – Cosmos Intro",
        content: ["Tendermint / Cosmos SDK basics"],
        length: "3h",
        extra: "💻 Build: Minimal blockchain node",
      },
      {
        title: "Front-end Integration (10%)",
        content: [
          "Wallets (MetaMask, Phantom), events, transactions",
          "Ethers.js, Web3.js",
        ],
        length: "3h",
        extra: "💻 Mini project: Cross-chain dApp or protocol simulator",
      },
    ],
  },
  {
    title: "Ecosystem & Frontier (Weeks 9-12)",
    goal: "Explore practical applications & future directions",
    weeks: [
      {
        title: "Week 9: DeFi + NFTs",
        content: [
          "AMMs, stablecoins, staking",
          "NFT metadata, royalties, marketplaces",
        ],
        length: "5h",
      },
      {
        title: "Week 10: Emerging Web3 Sectors",
        content: [
          "DePIN (Helium, Render, Akash)",
          "DeSci (VitaDAO, Molecule)",
          "Meme tokens & culture",
        ],
        length: "2h",
      },
      {
        title: "Week 11: AI in Web3",
        content: [
          "Bittensor, Ocean, autonomous agents",
          "Prompt engineering meets smart contracts",
        ],
        length: "5h",
      },
      {
        title: "Week 12: Final Project Sprint",
        content: [
          "Teams of 3 build a full-stack dApp in chosen vertical (DeFi, DeSci, AI, GameFi, DePIN, NFT, Meme)",
          "Demo Day (3h) + GitHub submission",
          "NFT-backed certificate of graduation",
        ],
        length: "Sprint Week",
      },
    ],
  },
];
