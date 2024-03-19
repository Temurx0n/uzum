import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="box1">
          <b><p className="box1_p">Biz haqimizda</p></b><br />
          <p className="box1_text">Topshirish punkitlari</p><br />
          <p className="box1_text">Vakansiyalar</p><br />
        </div>
        <div className="box2">
          <b><p className="box1_p">Biz haqimizda</p></b><br />
          <p className="box1_text">Topshirish punkitlari</p><br />
          <p className="box1_text">Vakansiyalar</p><br />
        </div>
        <div className="box3">
          <b><p className="box1_p">Biz haqimizda</p></b><br />
          <p className="box1_text">Topshirish punkitlari</p><br />
          <p className="box1_text">Vakansiyalar</p><br />
        </div>
        <div className="box_left">
          <b><p className="box1_p">Ilovani yuklab olish</p></b><br />
          <div className="mess">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" className="apple" /><span className="span">App store</span>
            <img src="https://bestforandroid.com/apk/wp-content/uploads/2023/04/Google-Play-Store-featured-image.png" alt="" className="play" /><span className="span2">App store</span>

          </div><br /><br />
         <b> <p className="mess_p">Uzum ijtimoiy tarmoqlarda</p></b><br />
          <div className="messengers_group">
            <a href="https://www.instagram.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png" className="messengers" alt="" /></a>
            <a href="https://web.telegram.org/k/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png" className="messengers" alt="" /></a>
            <a href="https://www.youtube.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" className="messengers" alt="" /></a>
            <a href="https://www.facebook.com/?locale=ru_RU"><img src="https://www.facebook.com/images/fb_icon_325x325.png" className="messengers" alt="" /></a></div>
        </div></footer>
    </div>
  )
};

export default Footer;
