import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const {
    index,
    id,
    title,
    genre,
    desc,
    img,
    imgTitle,
    isSeries,
    limit,
    video,
    trailer,
    year,
  } = props;

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">{limit}</span>
              <span>{year}</span>
            </div>
            <div className="desc">{desc}</div>
            <div className="genre">{genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
