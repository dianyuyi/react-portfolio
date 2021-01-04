import React from "react";
import { useGlobalContext } from "../context";
import { TagBtn } from "../components/styles/tag";

const TagMenu = () => {
  const { allTags, setActiveTag, activeTag, filterByTag } = useGlobalContext();
  // const Tags = Array.from(allTags);
  // const handleClick = (e) => {
  // e.preventDefault();
  // filterByTag(e);
  // setActiveTag(e);
  // };

  return (
    <div>
      {allTags.map((tag, index) => {
        return (
          <TagBtn
            key={index}
            className={`${activeTag === tag ? "active" : ""}`}
            onClick={() => filterByTag(tag)}
          >
            {tag}
          </TagBtn>
        );
      })}
    </div>
  );
};

export default TagMenu;
