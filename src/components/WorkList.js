import Work from "./Work";

const WorkList = ({ work, currentCat }) => {
  return (
    <>
      {currentCat
        ? work
            .filter((work) => work.category == currentCat)
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
            })
        : work.map((work) => {
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

export default WorkList;
