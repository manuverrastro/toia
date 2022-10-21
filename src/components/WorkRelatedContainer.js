import React from "react";
import { useState, useEffect } from "react";
import WorkRelatedList from "./WorkRelatedList";

const WorkRelatedContainer = ({ currentCat, currentId, allworks }) => {
  const [RelatedWork, setRelatedWork] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((json) => {
        setRelatedWork(json.filter((el) => el.category == currentCat));
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [currentCat]);

  return (
    <>
      <div className="related row">
        <h4>Related Projects</h4>
        <WorkRelatedList related={RelatedWork} currentId={currentId} />
      </div>
    </>
  );
};

export default WorkRelatedContainer;
