import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import JS from "../assets/img/JS2.png"
import React from "../assets/img/React.png"
import MongoDB from "../assets/img/MongoDB.png"
import SQL from "../assets/img/SQL.png"
import Django from "../assets/img/Django.png"
import API from "../assets/img/API.png"
import Bootstrap from "../assets/img/Bootstrap.png"
import Docker from "../assets/img/Docker.png"
import Kubernetes from "../assets/img/Kubernetes.png"
import Azure from "../assets/img/azure.png"
import AWS from "../assets/img/AWS.png"
import AI from "../assets/img/AI.png"
import ML from "../assets/img/ML.png"
import DL from "../assets/img/DL.png"
import Python from "../assets/img/Python.png"



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <section className="menu-card">
                            <h2>Menu</h2>
                            <ul>
                                <li>
                                    <img src="dish1.jpg" alt="Dish 1" />
                                    <p>Dish 1 - Description</p>
                                </li>
                                <li>
                                    <img src="dish2.jpg" alt="Dish 2" />
                                    <p>Dish 2 - Description</p>
                                </li>
                                <li>
                                    <img src="dish3.jpg" alt="Dish 3" />
                                    <p>Dish 3 - Description</p>
                                </li>
                                <li>
                                    <img src="dish1.jpg" alt="Dish 1" />
                                    <p>Dish 1 - Description</p>
                                </li>
                                <li>
                                    <img src="dish2.jpg" alt="Dish 2" />
                                    <p>Dish 2 - Description</p>
                                </li>
                                <li>
                                    <img src="dish3.jpg" alt="Dish 3" />
                                    <p>Dish 3 - Description</p>
                                </li>
                                <li>
                                    <img src="dish1.jpg" alt="Dish 1" />
                                    <p>Dish 1 - Description</p>
                                </li>
                                <li>
                                    <img src="dish2.jpg" alt="Dish 2" />
                                    <p>Dish 2 - Description</p>
                                </li>
                                <li>
                                    <img src="dish3.jpg" alt="Dish 3" />
                                    <p>Dish 3 - Description</p>
                                </li>
                            </ul>

                        </section>
                        <section className="menu-card">
                            <h2>Menu</h2>
                            <ul>
                                <li>
                                    <img src="dish1.jpg" alt="Dish 1" />
                                    <p>Dish 1 - Description</p>
                                </li>
                                <li>
                                    <img src="dish2.jpg" alt="Dish 2" />
                                    <p>Dish 2 - Description</p>
                                </li>
                                <li>
                                    <img src="dish3.jpg" alt="Dish 3" />
                                    <p>Dish 3 - Description</p>
                                </li>
                                <li>
                                    <img src="dish1.jpg" alt="Dish 1" />
                                    <p>Dish 1 - Description</p>
                                </li>
                                <li>
                                    <img src="dish2.jpg" alt="Dish 2" />
                                    <p>Dish 2 - Description</p>
                                </li>
                                <li>
                                    <img src="dish3.jpg" alt="Dish 3" />
                                    <p>Dish 3 - Description</p>
                                </li>
                                <li>
                                    <img src="dish1.jpg" alt="Dish 1" />
                                    <p>Dish 1 - Description</p>
                                </li>
                                <li>
                                    <img src="dish2.jpg" alt="Dish 2" />
                                    <p>Dish 2 - Description</p>
                                </li>
                                <li>
                                    <img src="dish3.jpg" alt="Dish 3" />
                                    <p>Dish 3 - Description</p>
                                </li>
                            </ul>

                        </section>
                        <a href="https://www.eat.ch/restaurant-name" target="_blank" className="eat-button">Visit eat.ch</a>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
