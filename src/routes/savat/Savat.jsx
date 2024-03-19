import './Savat.css'

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

const Savat = () => {
  return <div className="container"><br /><br />

    <div className="cards">
      <div className="cart">
        <img src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-15-pro-max-black-titanium.png?v=9166c13e" alt="" className="card_img" />
        <h2 className="card_p">Iphone 15 Pro Max</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-15-pro-max-black-titanium.png?v=9166c13e" alt="" className="card_img" />
        <h2 className="card_p">Iphone 15 Pro Max</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-15-pro-max-black-titanium.png?v=9166c13e" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
    </div>
    <div className="box">
      
    </div>
  </div>;

}

export default Savat