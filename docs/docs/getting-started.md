# Getting Started

## What is Graphchain?

**Graphchain** is a **"Layer-1" Directed Acyclic Graph (DAG)-based protocol**. It was originally introduced in an academic paper by **Xavier Boyen, Christopher Carr, and Thomas Haines**, first written and disseminated in 2016 and subsequently published in 2018. 
This is one of the first to write about the application DAGs in blockchain technoligy. 

Graphchain has been under development into a working system since 2021, currently has an operational testnet and a mainet going live planned for early 2025. Since 


### Links to Key Resources

- **The Whitepaper**: *Lybell Graphchain: A Cross-Platform Blockchain for Scale, Security, and Reliability*, [https://graphchain.org/assets/wp.pdf](https://graphchain.org/assets/wp.pdf)
- **The 2018 Paper**:  *Graphchain: A Blockchain-Free Scalable Decentralised Ledger*, Authors: X. Boyen, C. Carr, T. Haines, *Proceedings of the 2nd ACM Workshop on Blockchains, Cryptocurrencies, and Smart Contracts (2018)*, [https://dl.acm.org/doi/10.1145/3205230.3205235](https://dl.acm.org/doi/10.1145/3205230.3205235)
- **2016 Paper**: *Blockchain-Free Cryptocurrencies: A Rational Framework for Truly Decentralized Fast Transactions*, X. Boyen, C. Carr, T. Haines, *IACR Cryptology ePrint Archive (2016)*, [https://eprint.iacr.org/2016/871](https://eprint.iacr.org/2016/871)
- **Popular write-up peice**: *Bitcoin unchained*, 
  [https://eprints.sztaki.hu/9327/1/Bauer_42_3256036_ny.pdf#page=16](https://eprints.sztaki.hu/9327/1/Bauer_42_3256036_ny.pdf#page=16)

---



## DAGs? 

DAGs are relatively simple to understand, and we display them visually circles (nodes) and arrows (edges). The term is taken from the matemtaical area of Graph Theory. If we think of the Bitcoin blockchai structure, it is also a DAG but with more restictions. 

## What is a DAG?
DAG stands for Directed Acyclic Graph.
A DAG idea is taken from the matemtaical area of Graph Theory. It consists of:

- **Nodes (vertices)**: Usually represented by circles, representing data points, such as transactions or blocks in cryptocurrencies.
- **Edges (arrows)**: Representing relationships between the nodes.

### Key Properties of a DAG

1. **Directed**:  
   Each edge has a specific direction, indicating the flow or relationship between nodes.  
2. **Acyclic**:  
   There are no loops or cycles, meaning you cannot traverse the graph in a way that leads back to the starting point.

---



### A Graph

```mermaid
  graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
```

A Directed Acyclic Graph (DAG) is a data structure used in mathematics and computer science. It consists of:

Nodes (vertices): Representing data points, such as transactions or blocks.
Edges (arrows): Representing relationships between the nodes.
The key properties of a DAG:

Directed: Each edge has a direction, indicating the relationship between nodes.
Acyclic: There are no loops or cycles, meaning you cannot traverse the graph in a way that leads back to the starting point.
In Graph Theory, DAGs are widely studied due to their flexibility and efficiency. In the context of blockchain and distributed systems:

A traditional blockchain (like Bitcoin) can be thought of as a restrictive DAG, where blocks form a single linear chain.
Graphchain expands on this by allowing a more generalized DAG structure, enabling multiple parallel paths and reducing bottlenecks.

## Why use DAGs?
Graphchain proposes a DAG-based infrastructure that is similar to Bitcoin, but offers much greater scalability. This scalability comes with different security assumptions, which relies on rational actors. 

DAGs have several advantages over traditional linear blockchain structures:

- **Scalability**:
A DAG structure supports parallel transaction validation, allowing the network to process many transactions simultaneously without waiting for a single block to complete.
- **Efficiency**:
The absence of a linear block structure eliminates the need for mining races, reducing computational overhead and energy consumption.

 While Bitcoin’s blockchain is technically a DAG with added restrictions, Graphchain leverages the full potential of DAGs to improve scalability without compromising on key features like decentralization. However, this approach requires different security assumptions, relying on rational actors who act in their own self-interest while maintaining network integrity.


## Consensus


## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
