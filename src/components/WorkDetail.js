import WorkRelatedContainer from "./WorkRelatedContainer";
import SEO from "./SEO";

const WorkDetail = ({ work, allworks }) => {
  return (
    <>
      <SEO
        title="TOIA - Working"
        description="Beginner friendly page for learning React Helmet."
        name="Company name"
        type="article"
      />
      <h1>{work.title}</h1>
      <small>category: {work.category}</small>
      <p className="mt-4">{work.description}</p>

      <WorkRelatedContainer
        currentId={work.id}
        currentCat={work.category}
        allworks={allworks}
      />
    </>
  );
};

export default WorkDetail;
