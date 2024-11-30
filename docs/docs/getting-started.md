# Getting Started

## What is Graphchain?
Graphchain is a "Layer-1" Directed Acyclic Graph (DAG)-based crypto protocol. It was originally an academic paper from Boyen, Carr and Haines, first written about in 2016, and subsequently 2018. 

Links:
- White paper: [WHITEPAPER
Lybell Graphchain
A CROSS PLATFORM BLOCKCHAIN FOR SCALE,
SECURITY AND RELIABILITY]{https://graphchain.org/assets/wp.pdf}
- 2018 paper: Graphchain: A blockchain-free scalable decentralised ledger. X Boyen, C Carr, T Haines
Proceedings of the 2nd ACM Workshop on Blockchains, Cryptocurrencies, and Smart Contracts. 2018.
- 2016 paper: Blockchain-Free Cryptocurrencies
X Boyen, C Carr, T Haines
A Rational Framework for Truly Decentralized Fast Transactions. IACR Cryptol …
- Popular write-up peice: Bitcoin unchained
https://eprints.sztaki.hu/9327/1/Bauer_42_3256036_ny.pdf#page=16



## What is a DAG? 
DAG stands for Directed Acyclic Graph.
DAGs are relatively simple to understand, and we display them visually circles (nodes) and arrows (edges). The term is taken from the matemtaical area of Graph Theory. If we think of the Bitcoin blockchai structure, it is also a DAG but with more restictions. 


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



## Why DAGs then?
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
