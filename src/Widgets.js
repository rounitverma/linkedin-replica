import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Captain Kohli era ends", "Top news - 9099 readers")}
      {newsArticle("React v/s Angular", "Top news - 7031 readers")}
      {newsArticle("Omicron led 3rd wave", "Health - 4329 readers")}
      {newsArticle("Republic Day", "India news - 799 readers")}
      {newsArticle("GATE 2022 postponed", "Education - 669 readers")}
      {newsArticle("OLA hits a low", "Automobile - 500 readers")}
    </div>
  );
}

export default Widgets;
