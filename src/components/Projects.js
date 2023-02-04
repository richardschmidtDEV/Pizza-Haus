import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Gallery from "../assets/img/gallery.jpg";
import Gallery2 from "../assets/img/gallery2.jpg";
import Gallery3 from "../assets/img/gallery3.jpeg";
import Gallery4 from "../assets/img/gallery4.jpg";
export const Ueberuns = () => {



  return (
    <section className="ueberuns" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Über uns</h2>
                <Tab.Container id="ueberuns-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                    <Nav.Item>
                      <Nav.Link eventKey="first">Über uns</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Gallerie</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Standort</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                        <div className="überunstextcontainer">
                        <p className="überunstext">                        "Willkommen bei Pizza Haus! Wir sind ein Familienbetrieb, der sich auf die Herstellung authentischer italienischer Pizzen spezialisiert hat. Unsere Pizzen werden mit frischen Zutaten und hausgemachtem Teig zubereitet, um jedem Kunden ein unvergessliches Geschmackserlebnis zu bieten. Wir legen großen Wert auf Qualität und Kundenzufriedenheit. Besuchen Sie uns und genießen Sie unser leckeres Essen bequem von zu Hause aus oder lassen Sie es sich ihr Essen bequemem nach Hause liefern . Garantiert 100% Zufriedenheit!
                            "Willkommen bei Pizza Haus! Wir sind ein Familienbetrieb, der sich auf die Herstellung authentischer italienischer Pizzen spezialisiert hat. Unsere Pizzen werden mit frischen Zutaten und hausgemachtem Teig zubereitet, um jedem Kunden ein unvergessliches Geschmackserlebnis zu bieten. Wir legen großen Wert auf Qualität und Kundenzufriedenheit. Besuchen Sie uns und genießen Sie unser leckeres Essen bequem von zu Hause aus oder lassen Sie es sich ihr Essen bequemem nach Hause liefern . Garantiert 100% Zufriedenheit!
                        </p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="container">
                        <div className="box">
                          <img src={Gallery4}/>

                        </div>
                        <div className="box">
                          <img src={Gallery}/>

                        </div>
                        <div className="box">
                          <img src={Gallery2}/>

                        </div>
                        <div className="box">
                          <img src={Gallery3}/>

                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
<p>Pizza Haus Fehraltdorf

    Allmendstrasse 34a
    8320 Fehraltorf</p>
                   </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
