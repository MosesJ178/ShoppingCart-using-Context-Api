const nftArray = [
    {
      id: 1,
      name: "NFT 1",
      imageUrl: "https://i.seadn.io/gae/seB7q6_7d8F7z96yjcBpMfb5yO-N6CRd7J74e73OfkfNalVhJpdatp7cwcnXLhWRUauDIPT7dNs9CA1SdRlvcIgGH1FpDGcWq8s0?auto=format&w=512",
      price: 10.0
    },
    {
      id: 2,
      name: "NFT 2",
      imageUrl: "https://i.seadn.io/gae/pnva5g8CrGB8yKjpPlA59IfCIE7aLTNgHLUBKhT9MucpPFhmdly12_vakHtJ0ietSdP2kyYgjQEem1tDb3qLxtxBqXMLWu9wGKt0Gug?auto=format&w=512",
      price: 15.0
    },
    {
      id: 3,
      name: "NFT 3",
      imageUrl: "https://i.seadn.io/gae/5_mcDQ2ptJf2TX-dOBpqEvqOxNK-DENFYrYfeAzVuQc8TmPdJw6LCmaglej1Vh4a6MruAg6lKrQ2-PL3iX-RispKx34oyvjN24BQWQ?auto=format&w=512",
      price: 20.0
    },
    {
      id: 4,
      name: "NFT 4",
      imageUrl: "https://i.seadn.io/gae/FSINwQQCC4DL85xdvhm2HgeP9dwjeslhQhsQpW2n9iD4Q2ar8IDzAG-iH8vcgsUDrpn72P7k7vCSYGWISsrnh1Zd62V6s-eoMilfBZA?auto=format&w=512",
      price: 25.0
    },
    {
      id: 5,
      name: "NFT 5",
      imageUrl: "https://i.seadn.io/gae/zzmDgjiz03e-Y2eACMWYPKDemjx5U11lMEOi3witJ4krnuT1tYlQkZ0Z6YItNrvw6EnAxWHv80sdEqvP-J44_UkVGZAn0327QM1R0Q?auto=format&w=512",
      price: 30.0
    },
    {
      id: 6,
      name: "NFT 6",
      imageUrl: "https://i.seadn.io/gae/wEGLSAmXjkEqJf1k7UprwpGvOAjyUmFIOQdBI54z98HOLGbWJWzV24j5_IUup6Inc54-BI8_ZpgOPYEol7mMOAstW7K5L9zV1AXJ?auto=format&w=512",
      price: 35.0
    },
    {
      id: 7,
      name: "NFT 7",
      imageUrl: "https://i.seadn.io/gae/wqGKPj2--BNL1is4ECrCe6NSJUEy5sR9uPort-I4Vj9sf_Y1IB8MSdqP7d8R7BtwIiisROjgP4ilqMrxa4nLH-biTFiEodPNlxQftA?auto=format&w=512",
      price: 40.0
    },
    {
      id: 8,
      name: "NFT 8",
      imageUrl: "https://i.seadn.io/gae/ll9KPmaSUBcowuD0Z0co5m5Xh5BShyVrTZ_QoOWdousOoAwBIN-6qAUex0RacyiZivE2H9Ad5SE73kjyFqxcjNvO05SI-IGWnrvW2Q?auto=format&w=512",
      price: 45.0
    },
    {
      id: 9,
      name: "NFT 9",
      imageUrl: "https://i.seadn.io/gae/95jI5RZO4cr8bAdXFWYc02t90rBzJOmz25cqIXJMc9Ff8fepqx70GV9tNXobKrHkr2-ln3Wt02rWXyrHAZVh49mZLkXVjQVA5gK5?auto=format&w=512",
      price: 50.0
    },
    {
      id: 10,
      name: "NFT 10",
      imageUrl: "https://i.seadn.io/gae/N8uWFPLk6qHcYBe9sZl0sxSJ6TYDgpoHdq5UltCwfEAj6u11__pvE9Sgt4ZBgjMrF80lMXOxk4IWZUu6oEem1e5ZWBQASRwo-V25Lg?auto=format&w=512",
      price: 55.0
    },
    {
      id: 11,
      name: "NFT 11",
      imageUrl: "https://i.seadn.io/gae/x_m3f9m0rS27fKaHIIHhB-M1PTnqA2F5tr65dalVRpgUHO6M2NJcAnD1tB5APv3SofliEV4Vq-NDhq7XMa0hgu1Rsi0zEKTjxnKuEDg?auto=format&w=512",
      price: 60.0
    },
    {
      id: 12,
      name: "NFT 12",
      imageUrl: "https://i.seadn.io/gae/QzZAeakZBdaQ7IgxanXsU1db0c_u1kFdpKdLJKL6pnDACwfILZ8oqsHXwukd7dNdrffi7hCkeCPjkOx2snn2QtuLQQv0cG9rplPz?auto=format&w=512",
      price: 65.0
    },
    {
      id: 13,
      name: "NFT 13",
      imageUrl: "https://i.seadn.io/gcs/files/3c52815ed9d99a4f3aeff8f51dc5b3a0.jpg?auto=format&w=512",
      price: 70.0
    },
    {
      id: 14,
      name: "NFT 14",
      imageUrl: "https://i.seadn.io/gae/ZtyMIiYUhD3tI8FrLDbl0_dc4tzUBW2OE2tR_5bjWXR0pLRTctMparMmC9Ga1t66RfMvylMtOxw1mVTbE8mjUUDC7bvpB9P2377ZK6Y?auto=format&w=512",
      price: 75.0
    },
    {
      id: 15,
      name: "NFT 15",
      imageUrl: "https://i.seadn.io/gae/OmsCZ2j6uM8o46bPlzL0LWqQrcwJBD-RpbnLDULmhBttf_WR0ybM02zOiAZl4U3zICIUI7HGkb6vG2j9bgevXGevzMo96OCutOC4UA?auto=format&w=512",
      price: 80.0
    }
]  
export default nftArray;