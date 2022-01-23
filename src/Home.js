import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Techonto® Replacement Band Strap for Xiaomi Mi Band 2 / Xiaomi MI Band HRX Edition/Xiaomi Mi Band HRX Version (Device not Included) (Black)
            TECHONTO"
            image={
              "https://images-na.ssl-images-amazon.com/images/G/31/consumer_electronics/amtamz/kiosk_janart/xcm_banners_2022_janart_kioskcard-390x498-product-headline-badge-logo-rrs7x-bwj31-1-ma6v4_390x498_in-en._CB648768688_.jpg"
            }
            price={134}
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            price={180}
            rating={5}
            title="Carolina Herrera
Men 212 NYC Deodorant 150 ml"
            image={
              "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/1/9/0fc5470b-50db-4c0d-a8da-66d70cd0a4201641702713195-Paco_-_CH_.jpg"
            }
          />
          <Product
            price={4844}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61PnHlc0HCL._SL1500_.jpg"
            }
            title="2021 Apple 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Silver (9th Generation)"
          />
          <Product
            rating={5}
            price={283}
            title="Mi 138.8 cm (55 Inches) 4K Ultra HD Android Smart LED TV 4X | L55M5-5XIN (Black)"
            image={
              "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            rating={4}
            price={388}
            title="2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey"
            image={
              "https://m.media-amazon.com/images/I/61V7cDH8AAS._SL1188_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
