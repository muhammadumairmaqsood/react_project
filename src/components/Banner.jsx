import heroVideo from "../assets/hero.mp4";
import "../components/banner.css";
const Banner = () => {
  return (
    <section className="banner-section">
      <div className="hero-video">
        <video src={heroVideo} autoPlay loop muted playsInline />
      </div>
      <div className="hero-content">
        <h1>Shope Onlne make life easy</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          dolorum voluptas accusantium, repellat reiciendis ad!
        </p>
        <button>Buy Now</button>
      </div>
    </section>
  );
};
export default Banner;
