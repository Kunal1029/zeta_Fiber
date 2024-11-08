// import Header from "./Header/Header";
import { Button } from "./imports/MuiImports";

function Price() {
  return (
    <div>
      {/* <!-- price section --> */}

      <section className="price_section layout_padding  ">
        <div className="subContainer  ">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
          </div>
          <div className="price_container">
            <div className="box   ">
              <div className="detail-box">
                <h2>
                  <span>49</span>
                </h2>
                <h6>Startup</h6>
                <ul className="price_features">
                  <li>2GB RAM</li>
                  <li>20GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
            </div>
            <div className="box  ">
              <div className="detail-box">
                <h2>
                  <span>99</span>
                </h2>
                <h6>Standard</h6>
                <ul className="price_features">
                  <li>4GB RAM</li>
                  <li>50GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
            </div>
            <div className="box  ">
              <div className="detail-box">
                <h2>
                  <span>149</span>
                </h2>
                <h6>Business</h6>
                <ul className="price_features">
                  <li>8GB RAM</li>
                  <li>100GB SSD Cloud Storage</li>
                  <li>Weekly Backups</li>
                  <li>DDoS Protection</li>
                  <li>Full Root Access</li>
                  <li>24/7/365 Tech Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Button
            variant="contained"
            sx={{
              borderRadius: "40px",
              padding: "10px 24px",
              "&:hover": {
                backgroundColor: "primary.dark",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              },
              "&:focus": {
                outline: "none", // Remove the focus ring
              },
            }}
            className="mt-3"
          >
            See Details
          </Button>
        </div>
      </section>

      {/* <!-- price section --> */}
    </div>
  );
}

export default Price;
