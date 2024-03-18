import { DiVisualstudio } from "react-icons/di";
import { DiEclipse } from "react-icons/di";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
export const Tools = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
        <section className="tools" id="tools">
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tools-bx wow zoomIn">
              <h2>Tools</h2>
              
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme tools-slider">
                <div className="item">
                  <DiVisualstudio className="icon" size={148} />
                  <h5>VSCode</h5>
                </div>
                <div className="item">
                  <DiEclipse className="icon" size={148} />
                  <h5>Eclipse</h5>
                </div>
                {/* Add more tools as needed */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>  
  )
}