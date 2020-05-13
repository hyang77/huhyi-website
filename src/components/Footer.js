import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <section className="section-container">
        <div className="footer-info-container">
          <div>
            <h3>聯絡我們</h3>
            <p>huhyitw@gmail.com</p>
            <p>傳真: 06-2791648, 06-2491580 </p>
            <p>電話: 06-2791828 </p>
          </div>
          <div>
              <h3>營業時間</h3>
              <p>早上 8:30 ~ 晚上 5:30 (周一到週五)</p>
          </div>
          <div>
              <h3>公司地址</h3>
              <p>(717) 台南市仁德區太新路82號</p>
              <p>查看地圖</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Footer;
