import "./Header.css"
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiFolderOpenBold } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header_top">
          <h2 className="top_map"><FaMapMarkerAlt className="map" /></h2>
          <h3 className="map_h3">Shahar : <span className="map_span">Toshkent</span></h3>
          <h3 className="punk">Topshirish punkitlari</h3>
          <h3 className="punk2"> Buyurtmangizni 1 kunda bepul yetkazib beramiz! </h3>
          <h3 className="punk3">Uzumda soting</h3>
          <h3 className="punk4"> Savol-javoblar </h3>
          <h3 className="punk4"> Buyurtmalarim </h3>
          <img src="http://www.w3.org/2000/svg" alt="" /><span className="uzb">O'zbekcha</span>
        </div><br />
        <div className="header_items">
          <Link to="/">
            <img src="https://static.tildacdn.one/tild3664-3139-4231-b664-663965386239/uzum-footer.png" alt="LOGO" className="logo" />
          </Link>
          <button className="catalog"><div className="cat_text"><PiFolderOpenBold className="folder" />Katalog</div></button>
          <input type="text" placeholder="Mahsulotlar va turkumlar izlash" /><div className="searchs"><CgSearch className="search" /></div>
          <div className="kirish"><Link to="/kirish"><VscAccount className="guest" /><big>Kirish</big></Link></div>
          <div className="kirish2"><FaRegHeart className="guest" />Saralangan</div>
          <div className="kirish3"><Link to="/savat"><BiShoppingBag className="guest" /><big>Savat</big></Link></div>

        </div><br />
        <nav className="navbar">

          <Link to="/bulimlar">Elektronika</Link>
          <Link to="/ish">Maishiy Texnika</Link>
          <Link to="/shifokorlar">Kiyimlar</Link>
          <Link to="/yangiliklar">Oyoq kiyimlar</Link>
          <Link to="/"> Aksessuarlar </Link>
          <Link to="/"> Goʻzallik va parvarish </Link>
          <Link to="/"> Salomatlik </Link>
          <Link to="/">Yana <IoChevronDownOutline /></Link>
        </nav>
      </header>
    </div>
  )
}

export default Header