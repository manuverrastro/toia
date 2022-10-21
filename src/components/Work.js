import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SEO from "./SEO";
const Work = (work) => {
  return (
    <>
      <SEO
        title="TOIA - Work"
        description="Beginner friendly page for learning React Helmet."
        name="Company name"
        type="article"
      />
      <Col md={4} xs={12} className="work">
        <Link to={`/work/detail/${work.slug}`}>
          <div className="img-container">
            <img
              src={"/" + work.thumbnail}
              className="img-fluid work__image"
              alt={work.title}
            ></img>
          </div>
          <h1 className="work__title">
            {work.title}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              className="d-sm-block d-md-none"
            >
              <path d="m6 17.708-1.125-1.125L11.458 10 4.875 3.417 6 2.292 13.708 10Z" />
            </svg>
          </h1>
        </Link>
      </Col>
    </>
  );
};

export default Work;
