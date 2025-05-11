import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import {
  FaUserAlt,
  FaUserCircle,
  FaUserNinja,
  FaUserTie,
  FaUserSecret,
  FaUserMd,
} from "react-icons/fa";

const allTransactions = [
  { id: 1, name: "Hooman Hatefi", type: "Receipt Of Funds", amount: "+ $250.00", date: "12 December 2020", icon: <FaUserAlt />, bg: "#FAD4CF" },
  { id: 2, name: "Rasam r. Rostami", type: "Transfer Of Funds", amount: "- $250.00", date: "01 November 2020", icon: <FaUserCircle />, bg: "#B4E4FF" },
  { id: 3, name: "Tania Usefi", type: "Receipt Of Funds", amount: "+ $250.00", date: "10 October 2020", icon: <FaUserNinja />, bg: "#E1CFFF" },
  { id: 4, name: "Ali Kazemi", type: "Transfer Of Funds", amount: "- $120.00", date: "09 September 2020", icon: <FaUserTie />, bg: "#FFE7BA" },
  { id: 5, name: "Nina Moradi", type: "Receipt Of Funds", amount: "+ $430.00", date: "02 August 2020", icon: <FaUserSecret />, bg: "#C1FFD7" },
  { id: 6, name: "Omid Farahani", type: "Transfer Of Funds", amount: "- $75.00", date: "20 July 2020", icon: <FaUserMd />, bg: "#FFD6D6" },
  { id: 7, name: "Tania Usefi", type: "Receipt Of Funds", amount: "+ $250.00", date: "10 October 2020", icon: <FaUserNinja />, bg: "#E1CFFF" },
];

const Transactions = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    const maxPage = Math.floor(allTransactions.length / itemsPerPage);
    setPage((prev) => (prev < maxPage ? prev + 1 : 0));
  };

  const startIndex = page * itemsPerPage;
  const visibleTransactions = allTransactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h4 className="transactions-title">Transactions</h4>
        <IoIosArrowDropright className="transactions-arrow" onClick={handleNext} />
      </div>

      <div className="transactions-list">
        {visibleTransactions.map((item) => (
          <div key={item.id} className="transaction-item">
            <div
              className="transaction-icon"
              style={{ backgroundColor: item.bg }}
            >
              {item.icon}
            </div>
            <div className="transaction-details">
              <div className="transaction-name">{item.name}</div>
              <div className="transaction-type">{item.type}</div>
            </div>
            <div className="transaction-meta">
              <div
                className={`transaction-amount ${item.amount.includes("+") ? "income" : "expense"}`}
              >
                {item.amount}
              </div>
              <div className="transaction-date">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
