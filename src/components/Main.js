import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Contact from "./Contact.js";
import Bio from "./Bio.js";
import Shop from "./Shop.js";
import WorkListContainer from "./WorkListContainer.js";
import WorkDetailContainer from "./WorkDetailContainer.js";

const Main = () => {
  return (
    <main>
      <Container>
        <Row>
          <Routes>
            <Route path="/" element={<WorkListContainer />} />
            <Route path="/work" element={<WorkListContainer />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/work/detail/:slug"
              element={<WorkDetailContainer />}
            />
          </Routes>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
