import { FaSpotify, FaAmazon, FaHamburger } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiLyft } from "react-icons/si";

const purchases = [
  {
    id: 1,
    icon: <FaSpotify />,
    name: "Spotify",
    price: "$15.99",
    bg: "#CFFFE2",
  },
  { id: 2, icon: <SiLyft />, name: "Lyft", price: "$120.01", bg: "#D9F0FF" },
  {
    id: 3,
    icon: <FaAmazon />,
    name: "Amazon",
    price: "$1200.00",
    bg: "#FFF3D9",
  },
  {
    id: 4,
    icon: <FaHamburger />,
    name: "McDonalds",
    price: "$34.50",
    bg: "#FFE0E0",
  },
];

const Purchases = () => {
  return (
    <div style={{marginBottom:"5px"}}>
              <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              fontWeight: "700",
              fontSize: "16px",
            }}
          >
            Last Purchases
          </h4>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <FaArrowRightLong size={16} />
          </div>
        </div>
      <div className="purchase-grid">
        {purchases.map((item) => (
          <div key={item.id} className="purchase-card">
            <div className="icon-box" style={{ backgroundColor: item.bg }}>
              {item.icon}
            </div>
            <div className="purchase-info">
              <span className="label">{item.name}</span>
              <span className="value">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;