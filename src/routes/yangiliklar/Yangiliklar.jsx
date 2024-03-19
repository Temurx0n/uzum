import "./Yangiliklar.css";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import { IoStar } from "react-icons/io5";

import { TbShoppingBagPlus } from "react-icons/tb";

const Yangiliklar = () => {
  return <div className="container cart_box">
    <div className="a1">
      <h1 className="a1_h">Turkumlar
      </h1><br />
      <div className="a1_text">
        <p className="a1_p"> Barcha turkumlar</p>
        <p className="a1_p bg" > Elektronika</p>
        <p className="a1_p"> Quloqchinlar</p>
        <p className="a1_p"> Elektronlar uchun aksesuar</p>
        <p className="a1_p"> O'yin pristavka</p>
        <p className="a1_p"> Kampyuter aksesuar</p>
        <p className="a1_p"> Optik anyollar</p>
        <p className="a1_p"> office texnika</p>
        <p className="a1_p"> Barcha turkumlar</p>
        <p className="a1_p bg" > Elektronika</p>
        <p className="a1_p"> Quloqchinlar</p>
        <p className="a1_p"> Elektronlar uchun aksesuar</p>
        <p className="a1_p"> O'yin pristavka</p>
        <p className="a1_p"> Kampyuter aksesuar</p>
        <p className="a1_p"> Optik anyollar</p>
        <p className="a1_p"> office texnika</p></div>
    </div>
    <div className="a2">
      <div className="cards">
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>

      </div>
      <div className="cards">
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>

      </div>
      <div className="cards">
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3> 259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
      </div>
      <div className="cards">
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>726 637 so'm/oyiga</h4><br />
          <del>7 259 000 so'm</del><h3>5 259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
        <div className="cart">
          <img src="https://cdn-images.farfetch-contents.com/19/99/46/95/19994695_45344221_1000.jpg" alt="" className="card_img" />
          <h2 className="card_p">Loro piana</h2>
          <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
          <h4>26 637 so'm/oyiga</h4><br />
          <del>459 000 so'm</del><h3>259 000 so'm</h3>
          <button className="buy"><TbShoppingBagPlus /></button>
        </div>
      </div>
    </div>
  </div>;
};

export default Yangiliklar