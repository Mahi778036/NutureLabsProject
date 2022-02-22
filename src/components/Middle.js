import "./Middle.css";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import { Button } from "@material-ui/core";
import Table from "./Table";
import { useState } from "react";
import axios from "axios";

const Middle = (props) => {
  const url = "https://raw.githubusercontent.com/akshita151199/APIs/main/data";
  const [data, setData] = useState(null);

  const firstHandler = () => {
    axios.get(url).then((response) => {
      console.log("first", response.data);
      setData(response.data.data[0]);
    });
  };
  const secondHandler = () => {
    axios.get(url).then((response) => {
      console.log("second", response.data.data[1]);
      setData(response.data.data[1]);
    });
  };
  //   function changeHandler() {
  //     let item = document.querySelector(".tab_first");
  //     if (item.classList.contains("first")) {
  //       item.classList.remove = "first";
  //     } else {
  //       item.classList.add("first");
  //     }
  //   }

  const firstTabData = data;

  console.log(data);

  return (
    <div className="middle">
      <div className="middle_top">
        <div className="middle_top_heading">Section</div>
        <div className="middle_top_button">
          <AccountBalanceWalletIcon
            style={{
              color: "#3772FF",
              padding: "0 5px",
            }}
          />
          <h4>0.2 $XYZ</h4>
          <Button
            color="primary"
            style={{
              backgroundColor: "#A3E3FF",
              color: "#3772FF",
              fontSize: "12px",
            }}
          >
            Tier
          </Button>
        </div>
      </div>
      <div className="middle_tutorial">
        <div className="cross_symbol">&times;</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: "10px",
            color: "#2B2557",
            fontSize: "8px",
          }}
        >
          Tutorial
        </Button>
      </div>
      <div className="middle_rewards">
        <div className="rewards_title">Your Rewards</div>
        <div className="rewards_link">
          <h2>$0.26231428</h2>
          <Button
            startIcon={<FileCopyIcon />}
            style={{
              backgroundColor: "#3772FF",
              color: "#FFFFFF",
              padding: "5px 10px",
            }}
          >
            Custom link
          </Button>
        </div>

        <div className="rewards_icons">
          <Button
            style={{
              backgroundColor: "#353945",
              color: "#FFFFFF",
              borderRadius: "11px",
              fontSize: "12px",
              marginRight: "10px",
            }}
          >
            $40 AVAX
          </Button>
          <Button
            style={{
              backgroundColor: "#353945",
              color: "#FFFFFF",
              borderRadius: "11px",
              fontSize: "12px",
              marginRight: "10px",
            }}
          >
            $10 BNB
          </Button>
          <Button
            style={{
              backgroundColor: "#353945",
              color: "#FFFFFF",
              borderRadius: "11px",
              fontSize: "12px",
              marginRight: "10px",
            }}
          >
            $210 BTC
          </Button>
        </div>
      </div>
      <div className="middle_fees">
        <div className="middle_fee">
          <div className="fee_title">
            <div className="fee_title-logo">
              <MonetizationOnOutlinedIcon
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#BBB5E2",
                  fontSize: "20px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <h3>12.5% of fee</h3>
          </div>
          <div className="fee_referral">Your Referral Link for xyz</div>
          <div className="fee_button">
            <button className="fee_link">https://unityexchange.design</button>
            <FileCopyIcon
              style={{
                fontSize: "17px",
              }}
            />
          </div>
        </div>
        <div className="middle_fee">
          <div className="fee_title">
            <div className="fee_title-logo">
              <MonetizationOnOutlinedIcon
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#BBB5E2",
                  fontSize: "20px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <h3>12.5% of fee</h3>
          </div>
          <div className="fee_referral">Your Referral Link for xyz</div>
          <div className="fee_button">
            <button className="fee_link">https://unityexchange.design</button>
            <FileCopyIcon
              style={{
                fontSize: "17px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="middle_tabs">
        <button onClick={firstHandler} className="tab_first first">
          First Tab
        </button>
        <button onClick={secondHandler} className="tab_second">
          Second Tab
        </button>
      </div>
      <div className="middle_footer-title">
        <p>asset</p>
        <p>amount</p>
        <p>user account</p>
        <p>Referral earning</p>
      </div>
      {firstTabData && <Table data={firstTabData} />}
    </div>
  );
};

export default Middle;
