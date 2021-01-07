import React from "react";
import mediaList from "../data/socialMedia";
import {
  MediaContainer,
  MediaList,
  MediaItem,
} from "../components/styles/media";

const SocialMedia = () => {
  return (
    <MediaContainer>
      {mediaList.map((media) => {
        const { id, name, icon, url } = media;
        return (
          <MediaList key={id}>
            <MediaItem>
              <a href={url} target="_blank">
                {icon}
              </a>
            </MediaItem>
          </MediaList>
        );
      })}
    </MediaContainer>
  );
};

export default SocialMedia;
