import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CancelIcon from "@mui/icons-material/Cancel";
const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's in your mind ?" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <AddPhotoAlternateIcon />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <PlayCircleOutlineIcon />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <LocationOnIcon />
            Location
          </div>
          <div
            className="option"
            style={{
              color: "var(--schedule",
            }}
          >
            <CalendarMonthIcon />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <CancelIcon onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
