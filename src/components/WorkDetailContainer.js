import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WorkDetail from "./WorkDetail";

const WorkDetailContainer = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams([]);

  const [allWorks, setAllWorks] = useState([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((json) => {
        setWork(json.find((el) => el.slug == slug));
        setAllWorks(json);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  if (loading) {
    return <WorkDetail work={work} allworks={allWorks} />;
  }
};

export default WorkDetailContainer;
