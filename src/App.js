import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import BannerImg from "./components/BannerImg/BannerImg";
import Footer from "./components/Footer/Footer";
import iphone5s from "./assets/promo_iphone5s.jpg";
import iphone5c from "./assets/promo_iphone5c.jpg";
import birthday from "./assets/promo_30_years.jpg";
import supplier from "./assets/promo_supplier_responsibility.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <nav>
        <ul className="bannerNav">
          <BannerImg
            img={iphone5s}
            link="https://web.archive.org/web/20140301004610/http://www.apple.com/iphone-5s/"
          />
          <BannerImg
            img={iphone5c}
            link="https://web.archive.org/web/20140301004610/http://www.apple.com/iphone-5c/"
          />
          <BannerImg
            img={birthday}
            link="https://web.archive.org/web/20140301004610/http://www.apple.com/30-years/"
          />
          <BannerImg
            img={supplier}
            link="https://web.archive.org/web/20140301004610/http://www.apple.com/supplier-responsibility/"
          />
        </ul>
      </nav>
      <Footer />
    </div>
  );
}

export default App;
