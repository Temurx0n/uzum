import { Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "./home/Home";
import Shifokorlar from "./shifokorlar/Shifokorlar";
import Bulimlar from "./bulimlar/Bulimlar";
import Yangiliklar from "./yangiliklar/Yangiliklar";
import Savat from './savat/Savat'
import Ish from "./ish/Ish";
import Kirish from './kirish/Kirish'
const Routes = () => {
  return (
    <>
      <Header />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/shifokorlar">
        <Shifokorlar />
      </Route>
      <Route path="/bulimlar">
        <Bulimlar />
      </Route>
      <Route path="/yangiliklar">
        <Yangiliklar />
      </Route>
      <Route path="/ish">
        <Ish />
      </Route>
      <Route path='/savat'>
        <Savat />
      </Route>
      <Route path='/kirish'>
        <Kirish/>
      </Route>

      <Footer />
    </>
  );
};

export default Routes;
