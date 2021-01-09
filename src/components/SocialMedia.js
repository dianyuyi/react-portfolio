import React from "react";
import mediaList from "../data/socialMedia";
import { MediaContainer, MediaList, MediaItem } from "./styles/foo/media";

const SocialMedia = ({ iconColor }) => {
  return (
    <MediaContainer className={iconColor}>
      <MediaList>
        {mediaList.map((media) => {
          const { id, name, icon, url } = media;
          return (
            <MediaItem key={id} className={iconColor}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {icon}
              </a>
            </MediaItem>
          );
        })}
      </MediaList>
    </MediaContainer>
  );
};

export default SocialMedia;
