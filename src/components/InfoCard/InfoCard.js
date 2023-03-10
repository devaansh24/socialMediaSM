import React, { useState } from "react";
import "./InfoCard.css";
import EditIcon from "@mui/icons-material/Edit";
import ProfileModal from "../ProfileModal/ProfileModal";
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <EditIcon
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Works At: </b>
        </span>
        <span>Student</span>
      </div>
      <div className="info">
        <span>
          <b>Lives In: </b>
        </span>
        <span>India</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
