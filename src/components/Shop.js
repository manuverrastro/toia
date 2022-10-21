import Col from "react-bootstrap/Col";
import SEO from "./SEO";

const Shop = () => {
  return (
    <>
      <SEO
        title="TOIA - Shop"
        description="Beginner friendly page for learning React Helmet."
        name="Company name"
        type="article"
      />
      <Col className="shop">
        <h1 className="text-center">Coming soon...</h1>
        <p className="text-center">
          If you are interested in buy something please{" "}
          <a href="/contact">get in touch.</a>
        </p>
      </Col>
    </>
  );
};

export default Shop;
