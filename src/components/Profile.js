import React from "react";
import { useGlobalContext } from "../context";

const Profile = () => {
  // const { t, i18n } = useGlobalContext();
  return (
    <div>
      {/* <h1>{t("About Me")}</h1> */}
      <ul>
        <li>test1</li>
        <li>test2</li>
      </ul>
    </div>
  );
};

export default Profile;
