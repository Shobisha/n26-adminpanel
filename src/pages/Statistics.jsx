import Cards from "../components/Cards";
import SpendingChart from "../components/SpendingChart";
import Purchases from "../components/Purchases";
import Transactions from "../components/Transactions";

const Statistics = () => {
  return (
    <div className="main-layout">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="atm-card">
            <div className="atm-header">
              <h5 className="atm-title">Paradigm</h5>
              <div className="atm-brand">
                <p className="atm-n">N</p>
                <p className="atm-number">26</p>
              </div>
            </div>
            <h6 className="atm-number-display">3453 4262 7310 3728</h6>
            <div className="card-details">
              <div>
                <small className="label">Card Holder name</small>
                <p className="value">Mostafa Esmaeili</p>
              </div>
              <div>
                <small className="label">Expiry date</small>
                <p className="value">02/30</p>
              </div>
            </div>
          </div>

          <div className="statistics-card mb-3">
            <h4 className="statistics-heading">Deposit Terms</h4>
            <Cards
              title="Interest Rate"
              value="8% - 11%"
              secondtitle="Minimal Sum"
              secondvalue="From $1,000"
            />
          </div>

          <div className="statistics-card mb-3">
            <h4 className="statistics-heading">Depositing The Money</h4>
            <Cards
              title="Interest Rate"
              value="11% Annum"
              secondtitle="After Taxes"
              secondvalue="8.85% Annum"
            />
          </div>

          <div className="statistics-card">
            <Purchases />
          </div>
        </div>

        <div className="col-12 col-md-7">
          <SpendingChart />
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
