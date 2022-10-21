import { Col } from "react-bootstrap";

const Filter = ({ cats, setCurrentCat }) => {
  const handleClick = (event) => {
    document
      .querySelectorAll(".filter__button")
      .forEach((element) => element.classList.remove("active"));
    event.currentTarget.classList.add("active");

    setCurrentCat(event.currentTarget.id);
  };

  return (
    <Col xs={12} className="filter">
      {cats.map((val) => {
        return (
          <button
            id={val}
            key={val}
            className="filter__button"
            onClick={handleClick}
          >
            {val}
          </button>
        );
      })}
      <button key="all" className="filter__button active" onClick={handleClick}>
        All
      </button>
    </Col>
  );
};

export default Filter;
