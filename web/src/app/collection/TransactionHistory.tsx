import React from "react";

const TransactionHistory = () => {
  const transactions = [
    { id: 1, price: "0.0053 ETH", date: "2024-08-17", from: "shaunruma" },
    { id: 2, price: "0.0048 ETH", date: "2024-08-15", from: "alexandro.eth" },
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-bold mb-4">거래 기록</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id} className="flex justify-between text-gray-300 mb-2">
            <span>{tx.date}</span>
            <span>{tx.price}</span>
            <span>{tx.from}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
