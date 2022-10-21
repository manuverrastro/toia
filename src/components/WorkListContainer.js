import WorkList from "./WorkList.js";
import { useEffect, useState } from "react";
import Filter from "./Filter.js";
import CustomLoader from "./CustomLoader.js";

const WorkListContainer = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCat, setCurrentCat] = useState();
  const cats = [...new Set(work.map((val) => val.category))];

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((json) => {
        setWork(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentCat]);

  if (loading) {
    return <CustomLoader />;
  } else {
    return (
      <>
        <Filter cats={cats} setCurrentCat={setCurrentCat} />
        <WorkList work={work} currentCat={currentCat} />
      </>
    );
  }
};

export default WorkListContainer;
