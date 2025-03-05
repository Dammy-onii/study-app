const notesData = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    about:
      "Machine Learning (ML) is a subset of artificial intelligence that enables computers to learn from data and make predictions or decisions without being explicitly programmed. It is widely used in various industries, including healthcare, finance, and e-commerce, to improve efficiency, automate processes, and enhance user experience. Understanding the fundamental concepts of ML, such as data preprocessing, feature engineering, model selection, and evaluation, is crucial for developing accurate and reliable models. Supervised learning, unsupervised learning, and reinforcement learning are the three main types of ML approaches, each serving different use cases. This course provides an overview of essential ML concepts, applications, and tools.",
    note: [
      {
        id: 101,
        title: "Supervised Learning",
        about:
          "Supervised learning is a type of machine learning where the model is trained on labeled data. This means that the input data is paired with the correct output, allowing the model to learn the relationship between them. Common algorithms in supervised learning include linear regression, logistic regression, decision trees, and neural networks. This technique is widely used in applications such as fraud detection, email spam filtering, and medical diagnosis, where historical data helps predict future outcomes.",
      },
      {
        id: 102,
        title: "Unsupervised Learning",
        about:
          "Unsupervised learning involves training a model on data without predefined labels. The model identifies patterns, structures, or relationships in the data on its own. Common techniques include clustering (e.g., k-means, hierarchical clustering) and dimensionality reduction (e.g., PCA, t-SNE). Unsupervised learning is used in anomaly detection, customer segmentation, and recommendation systems, where data insights can drive business decisions.",
      },
    ],
    icon: "📘",
    bg: "bg-purple-200",
    date: "Feb 4, 2025",
    sources: [1, 2, 3],
  },
  {
    id: 2,
    title: "Blockchain Fundamentals",
    about:
      "Blockchain technology is a decentralized digital ledger that records transactions across multiple computers in a secure and immutable manner. It enables transparent, tamper-proof record-keeping, reducing the reliance on centralized authorities. Blockchain is the foundation of cryptocurrencies like Bitcoin and Ethereum, but its applications extend beyond finance, including supply chain management, healthcare, and digital identity verification. The technology operates through consensus mechanisms such as Proof of Work (PoW) and Proof of Stake (PoS), ensuring data integrity and security. Smart contracts, self-executing contracts with pre-defined rules, are a significant feature of blockchain, automating transactions without intermediaries.",
    note: [
      {
        id: 103,
        title: "Decentralization",
        about:
          "Decentralization is a key principle of blockchain technology, eliminating the need for central authorities such as banks or government institutions. Transactions are verified by a distributed network of nodes, reducing the risk of fraud and single points of failure. This approach enhances security, increases transparency, and empowers users by giving them full control over their digital assets.",
      },
      {
        id: 104,
        title: "Smart Contracts",
        about:
          "Smart contracts are self-executing agreements written in code, designed to automate processes based on predefined conditions. They eliminate the need for intermediaries and reduce transaction costs. Smart contracts are widely used in decentralized finance (DeFi), enabling lending, borrowing, and trading activities on blockchain networks with trustless execution.",
      },
    ],
    icon: "🔗",
    bg: "bg-blue-200",
    date: "Mar 10, 2025",
    sources: [4, 5],
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices",
    about:
      "Cybersecurity is the practice of protecting digital systems, networks, and data from cyber threats, including hacking, malware, and phishing attacks. As businesses and individuals rely more on digital platforms, cybersecurity has become critical to safeguarding sensitive information. Effective security measures involve strong password management, multi-factor authentication, firewalls, and encryption techniques. Organizations also need to educate employees about social engineering attacks and adopt security frameworks such as Zero Trust Architecture (ZTA). With the rise of artificial intelligence, cybercriminals are developing more sophisticated attack methods, making proactive security measures more essential than ever.",
    note: [
      {
        id: 105,
        title: "Phishing Attacks",
        about:
          "Phishing attacks trick users into revealing sensitive information, such as login credentials or financial details, by impersonating legitimate entities. Attackers use emails, fake websites, or phone calls to deceive victims. Preventative measures include recognizing suspicious messages, using email filters, and verifying links before clicking.",
      },
      {
        id: 106,
        title: "Password Management",
        about:
          "Using strong and unique passwords for different accounts is essential in cybersecurity. A password manager can help users generate and store complex passwords securely. Multi-factor authentication (MFA) adds an extra layer of security, making it harder for attackers to gain unauthorized access.",
      },
    ],
    icon: "🔒",
    bg: "bg-orange-200",
    date: "Jan 22, 2025",
    sources: [6, 7, 8, 9],
  },
  {
    id: 4,
    title: "Machine Learning",
    about:
      "Machine Learning (ML) is a transformative field that allows computers to learn patterns from data and make intelligent predictions or decisions. Unlike traditional programming, where rules are explicitly coded, ML models improve performance over time through experience. The field is categorized into supervised, unsupervised, and reinforcement learning. Supervised learning relies on labeled datasets, while unsupervised learning finds patterns in unlabeled data. Reinforcement learning, inspired by behavioral psychology, trains agents to make optimal decisions through rewards and penalties. ML is used in healthcare for disease detection, in finance for fraud detection, and in e-commerce for recommendation systems.",
    note: [
      {
        id: 107,
        title: "Supervised vs Unsupervised Learning",
        about:
          "Supervised learning uses labeled datasets to train models, ensuring precise predictions. In contrast, unsupervised learning works with unstructured data, identifying patterns without explicit labels. Both techniques play crucial roles in applications like speech recognition, image classification, and anomaly detection.",
      },
      {
        id: 108,
        title: "Reinforcement Learning",
        about:
          "Reinforcement learning (RL) trains models using a reward-based system, similar to trial-and-error learning in humans. RL is widely applied in robotics, autonomous vehicles, and game AI, where agents learn to make decisions in dynamic environments.",
      },
    ],
    icon: "🤖",
    bg: "bg-purple-200",
    date: "Mar 10, 2025",
    sources: [2, 5],
  },
  {
    id: 5,
    title: "Cloud Computing Essentials",
    about:
      "Cloud computing provides on-demand access to computing resources, including storage, processing power, and networking, over the internet. It eliminates the need for organizations to maintain on-premise infrastructure, reducing costs and increasing scalability. Cloud services are categorized into Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). IaaS offers virtualized computing resources, PaaS provides development environments, and SaaS delivers software applications. Security, cost optimization, and compliance are critical aspects of cloud computing. Companies like AWS, Microsoft Azure, and Google Cloud dominate the market, offering a range of services for businesses and developers.",
    note: [
      {
        id: 109,
        title: "IaaS vs PaaS vs SaaS",
        about:
          "Infrastructure as a Service (IaaS) provides raw computing resources, allowing businesses to manage virtual machines and networking. Platform as a Service (PaaS) offers development tools and frameworks, simplifying application deployment. Software as a Service (SaaS) delivers fully managed software applications, accessible via the internet.",
      },
      {
        id: 110,
        title: "Cloud Security",
        about:
          "Securing cloud environments involves implementing identity and access management (IAM), encryption, and network security measures. Organizations must comply with industry regulations and conduct regular security audits to mitigate risks such as data breaches and insider threats.",
      },
    ],
    icon: "☁️",
    bg: "bg-blue-200",
    date: "Dec 15, 2025",
    sources: [10],
  },
];

export default notesData;
