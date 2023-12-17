import profileImage from "../../../assets/image_profile.jpeg";
import "./homeView.css";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getEmail } from "../../../reducers/Home/selectors";

function HomeView({ email }) {
  return (
    <div className="homeView__main">
      <img className="pro_image" src={profileImage} alt="image_profile" />
      <b>
        <p>{email}</p>
      </b>
      <div className="homeView__detail">
        <div className="homeView__sub_detail">
          <span id="sub_detail_value">{100}</span>
          <span id="sub_detail_key">Following</span>
        </div>
        <div className="homeView__sub_detail">
          <span id="sub_detail_value">{100}</span>
          <span id="sub_detail_key">Followers</span>
        </div>
        <div className="homeView__sub_detail">
          <span id="sub_detail_value">{100}</span>
          <span id="sub_detail_key">Shots</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  email: getEmail(),
});

export default connect(mapStateToProps, {})(HomeView);
