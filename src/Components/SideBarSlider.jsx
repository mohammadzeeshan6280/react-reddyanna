
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../ModuleCss/SliderComponent.css';  // Custom styles

const SideBarSlider = () => {
  const settings = {
    dots: false,  // Remove dots if you don't need them
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,  // Enable arrows
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/first.png" alt="Image 1" className="slider-image" />
        </div>
        <div>
          <img src="/second.png" alt="Image 2" className="slider-image" />
        </div>
        <div>
          <img src="/third.png" alt="Image 3" className="slider-image" />
        </div>
        <div>
          <img src="/four.png" alt="Image 3" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
};

export default SideBarSlider;
