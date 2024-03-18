import { DiJava } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { DiEclipse } from "react-icons/di";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>To collect and comprehend the data from the portfolio, they must have analytical skills.<br></br> They should be decisive, capable of working independently, and knowledgeable about project portfolio management approaches and processes.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <DiJava className="icon" size={148}/> 
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                            <DiCode className="icon" size={148}/>
                                <h5>C</h5>
                            </div>
                            <div className="item">
                            <DiMysql className="icon" size={148}/>
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                            <DiHtml5 className="icon" size={148}/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                            <DiCss3 className="icon" size={148}/>
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    
  )
}