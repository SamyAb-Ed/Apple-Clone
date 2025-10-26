import React from "react";
// import "../assets/css/styles.css";
import ipadPro from "../../assets/images/home/ipodPronew.jpg";

const SectionOne = () => {
  return (
    <section className="first-hightlight-wrapper">
      <div className="container">
        <div className="new-alert">New</div>

        <div className="title-wraper bold black">iPad Pro</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Order</a>
            </li>
          </ul>
        </div>

        <div className="ipod-caption row justify-content-center align-items-center  ">
          <div className="col-auto text-center">
            iPad Pro available starting 3.25
          </div>
          <div className="col-auto text-center">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
  );
 };
export default SectionOne;