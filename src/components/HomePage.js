import React from "react";
import brand from "../assets/images/brand.png";
import product from "../assets/images/product-sample.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <React.Fragment>
      <img src={brand} className="brand-picture" alt="brand" />

      <section className="aboutus-section-container">
        <h3 className="aboutus-section-title">關於我們 About us</h3>
        <p>
          互怡企業有限公司創立於1991年，位於台南市仁德區，專營OA辦公家具、屏風、辦公桌、工作桌、工具車、椅子、效率櫃、鐵櫃、樹德產品、與辦公室週邊產品。
          「為客戶提供最優質與舒適辦公環境」是我們的信條，
          幫助客戶找到符合各自需求的辦公家具，並提供辦公空間規畫建議，從需求諮詢，
          家具選擇到規劃分析，提供最專業的服務。
        </p>
        <p>
          Huh-yi Enterprise Co.,Ltd was established in 1991 in Taiwan Tainan, is
          a professional office furniture supplier. Our products include office
          desks, meeting tables, task chairs, office cabinets, screens, and
          storage furniture. "To create the best and comfortable office
          environment for our customers", is the Huyi vision. We listen
          carefully to understand cutomers' needs, helping customers choose the
          suitable furniture, as well as providng with professional office space
          planning help. From office furniture consultation, selection to
          panning, we are dedicated to meet cutomers' expectations with superior
          service and products.
        </p>
      </section>
      <section className="product-section-container">
        <h3 className="product-section-title">
          <span>我們的產品</span>
          <span>Featured products</span>
        </h3>
        <div className="product-container">
          <div className="product-items">
            <img
              src={product}
              className="product-sample"
              alt="product-sample"
            />
          </div>
          <div className="product-items">
            <img
              src={product}
              className="product-sample"
              alt="product-sample"
            />
          </div>
          <div className="product-items">
            <img
              src={product}
              className="product-sample"
              alt="product-sample"
            />
          </div>
        </div>
        <Link to="/product">
          <button type="button" className="btn btn-light mb-5">
            查看更多產品 Explore more
          </button>
        </Link>
      </section>
      <section className="space-section-container">
        <div className="space-div"></div>
      </section>
    </React.Fragment>
  );
}

export default HomePage;
