import React from "react";
import { useGlobalContext } from "../context";
import { TagList, TagBtn } from "./styles/works/tag";

const TagMenu = () => {
  const { allTags, activeTag, filterByTag } = useGlobalContext();
  // const Tags = Array.from(allTags);
  // const handleClick = (e) => {
  // e.preventDefault();
  // filterByTag(e);
  // setActiveTag(e);
  // };

  return (
    <TagList>
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
    </TagList>
  );
};

export default TagMenu;
