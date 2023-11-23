import React from "react";
import { Header } from "../../Header";
import "./home.css";
import Banner from "../../component/banner/Banner";
import Product from "../../component/banner/product/Product";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="home__row">
        <Product
          id="12321341"
          title="itel A60s (4GB RAM + 64GB ROM, Up to 8GB RAM with Memory Fusion | 8MP AI Rear Camera | 5000mAh Battery with 10W Charging | Faceunlock & Fingerprint -Shadow Black"
          price={5999}
          rating={4}
          image="https://m.media-amazon.com/images/I/81wyL226-gL._SX679_.jpg"
        />
        <Product
          id="12321341"
          title="Fossil Grant Sport Analog Blue Dial Men's Watch-FS5237"
          price={7497}
          rating={5}
          image="https://m.media-amazon.com/images/I/71PzJidbCRL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321371"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={325.55}
          rating={5}
          image="https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129"
        />
        <Product
          id="12321391"
          title="MuscleBlaze Biozyme Performance Whey Protein| (Chocolate Hazelnut, 1 kg / 2.2 lb)"
          price={2299}
          rating={4}
          image="https://m.media-amazon.com/images/I/6160m6Vo1PL._SX679_.jpg"
        />
        <Product
          id="12321351"
          title="ZOUK Unisex Black Floral Printed Laptop Backpacks for Office, College and Travel| Fits upto 15.6 Inch Laptop"
          price={1999}
          rating={4}
          image="https://m.media-amazon.com/images/I/61cz2W9wKnL._SX679_.jpg"
        />
      </div>
      <div className="home__row">
      <Product
          id="12321311"
          title="HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, NVIDIA RTX 3050 GPU, 15.6-inch (39.6 cm), FHD, IPS, 144Hz, 9 ms Response time, 16GB DDR4, 512GB SSD, Backlit KB (MSO, Blue, 2.29 kg) fa0666TX"
          price={68990}
          rating={4}
          image="https://m.media-amazon.com/images/I/71h9nOTd93L._SX679_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
