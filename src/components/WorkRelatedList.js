import React from "react";
import Work from "./Work";

const WorkRelatedList = ({ related, currentId }) => {
  let shuffledRelated = related.sort(() => Math.random() - 0.5);

  return (
    <>
      {shuffledRelated
        .filter((work) => work.id !== currentId)
        .slice(0, 3)
        .map((work) => {
          return (
            <Work
              key={work.id}
              id={work.id}
              slug={work.slug}
              thumbnail={work.thumbnail}
              image={work.image}
              title={work.title}
              category={work.category}
            />
          );
        })}
    </>
  );
};

export default WorkRelatedList;
