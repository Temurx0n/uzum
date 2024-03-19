import "./Main.css";
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

const Main = () => {
  return <div className="container"><br /><br />
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide><img src="https://uzum-market-ea2c4.web.app/img/main_page_banner.jpg(2).png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://uzum-market-ea2c4.web.app/img/main_page_banner.jpgbc.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://uzum-market-ea2c4.web.app/img/main_page_banner.jpg(4).png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://uzum-market-ea2c4.web.app/img/main_page_banner.jpg(1).png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://uzum-market-ea2c4.web.app/img/main_page_banner.jpg(3).png" alt="" /></SwiperSlide>

    </Swiper>
    <div className="cards">
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>

    </div>
    <div className="cards">
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>

    </div>
    <div className="cards">
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>

    </div>
    <div className="cards">
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>
      <div className="cart">
        <img src="https://marketing.uz/brend-goda-2022/uploads/works/covers/bfac7248285eb3feb82cce2cea351725.jpg" alt="" className="card_img" />
        <h2 className="card_p">Televizor TCL 55C745</h2>
        <p className="star"><IoStar className="stars" />5.0 (30 sharhlar)</p><br />
        <h4>726 637 so'm/oyiga</h4><br />
        <del>10 496 000 so'm</del><h3>6 459 000 so'm</h3>
        <button className="buy"><TbShoppingBagPlus /></button>
      </div>

    </div>
  </div>;
};

export default Main;
