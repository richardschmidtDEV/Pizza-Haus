import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import React from "../assets/img/React.png"
import Pizza from "../assets/img/pizza.png"
import Eat from "../assets/img/eat_ch.png"
import Insalate from "../assets/img/insalatepng.png"
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import {ProjectCard} from "./ProjectCard";

export const Karte = () => {
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

    <section className="karte" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="karte-bx wow zoomIn">
                        <Container>
                            <Row>
                                <Col size={12}>
                                    <TrackVisibility>
                                        {({ isVisible }) =>
                                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                                <h2>Menu</h2>
                                                <Tab.Container id="karte-tabs" defaultActiveKey="first">
                                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                                                        <Nav.Item>
                                                            <Nav.Link eventKey="first">Pizza</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="second">Insalate</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="third">Desserts</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="four">Getränke</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <div className="parallaxcontainer">
                                                    <div className="parallax">
                                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                                                        <Tab.Pane eventKey="first">

                                                            <section className="menu-card">
                                                                <img className="pizzapng" src={Pizza} alt="Dish 1" />
                                                                <ul>
                                                                    <li>

                                                                        <p>Pizza Margherita</p>
                                                                        <p className="description">Tomatensauce, Mozzarella</p>
                                                                        <p className="price">15.00-</p>

                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Funghi</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Champignons</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Napoletana</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Sardellen</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Siciliana</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Oliven, Kapern, Sardellen</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Salami</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Salami</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Prosciutto</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Schinken</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Prosciutto é funghi</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Schinken, Champignons</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Vegetariana</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Tagesgenüse</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Nonno</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, scharfe Salami, Zwiebeln, Knoblauch</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Diavola</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, scharfe Salami, Pepperoni</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Pizza House</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Rucola, Cherrytomaten, Parmesan</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Rustica</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Speck, Zwiebeln, Knoblauch</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Tonno</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Thunfisch, Zwiebeln</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Gorgonzola é spinaci</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Gorgonzola, Spinat</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Contadina</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Spinat, Ei, Zwiebeln, Knoblauch</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Cappricciosa</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Schinken, Champignons, Artischocken</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Fiorentina</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Speck, Zwiebeln, Knoblauch, Spinat</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Quattro Stagioni</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Schinken, Champignons, Pepperoni, Artischocken</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Padrone</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Schinken, Champignons, Spinat, Gorgonzola, Knoblauch</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Parma</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Parmaschinken, Rucola</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Quattro Formaggi</p>
                                                                        <p className="description">Vier verschieden Käsesorten</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Pollo</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Poulet, Pepperoni</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Pollo</p>
                                                                        <p className="description">Tomatensauce, Mozzarella, Poulet, Pepperoni</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                </ul>
                                                            </section>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="second">
                                                            <section className="menu-card">
                                                                <img className="insalatepng" src={Insalate} alt="Dish 1" />
                                                                <ul>
                                                                    <li>

                                                                        <p>Pizza Margherita</p>
                                                                        <p>Tomatensauce, Mozzarella</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Funghi</p>
                                                                        <p>Tomatensauce, Mozzarella, Champignons</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>Pizza Napoletana</p>
                                                                        <p>Tomatensauce, Mozzarella, Sardellen</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Siciliana</p>
                                                                        <p>Tomatensauce, Mozzarella, Oliven, Kapern, Sardellen</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>
                                                                    <li>

                                                                        <p>Pizza Salami</p>
                                                                        <p>Tomatensauce, Mozzarella, Salami</p>
                                                                        <p className="price">15.00-</p>
                                                                    </li>

                                                                </ul>
                                                            </section>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="third">
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
                                                                </ul>
                                                            </section>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="four">
                                                            <section className="menu-card">

                                                                <ul>
                                                                    <li>
                                                                        <img src="dish1.jpg" alt="Dish 1" />
                                                                        <p>Pizza Margeri - Description</p>
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

                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                    </div>
                                                    </div>

                                                </Tab.Container>
                                            </div>}
                                    </TrackVisibility>
                                </Col>
                            </Row>
                        </Container>

<div className="buttondiv">
    <a href="https://www.eat.ch/restaurant-name" target="_blank" className="eat-button"><span className="bestellep">Bestelle Online</span>

                            <img className="eatlogo" src={Eat} alt="Image"></img> </a>
</div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>

  )
}
