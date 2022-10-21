import Col from "react-bootstrap/Col";
import SEO from "./SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="TOIA - Contact"
        description="Beginner friendly page for learning React Helmet."
        name="Company name"
        type="article"
      />

      <Col className="contact">
        <p className="text-center">
          Get in touch:{" "}
          <a href="mailto:victoriamzur@gmail.com" target="blank">
            victoriamzur@gmail.com
          </a>
        </p>
        <p className="text-center">
          Instagram:{" "}
          <a href="https://www.instagram.com/toia.mzur/" target="blank">
            @toia.mzur
          </a>
        </p>
      </Col>
    </>
  );
};

export default Contact;
