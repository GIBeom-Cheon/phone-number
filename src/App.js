import style from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className={style.App}>
      <div className={style.title}>
        <h1>Phone Book</h1>
      </div>
      <video loop preload="auto" autoPlay="autoplay" muted="muted">
        <source src="./video/box.mp4" type="video/mp4" />
      </video>
      <Container className={style.containerBox}>
        <Row>
          <Col sm="6" className={style.col1}>
            <ContactForm />
          </Col>
          <Col sm="6" className={style.col2}>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
