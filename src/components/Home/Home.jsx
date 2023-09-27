import "./Home.css";
import { BsSearch } from "react-icons/bs";
import { MdClear, MdGroups2, MdAccountCircle } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { PiVideo } from "react-icons/pi";
import { LuStore } from "react-icons/lu";
import { RiGamepadFill } from "react-icons/ri";
import { PiDiceSixBold } from "react-icons/pi";
import { BiSolidMessageAlt, BiSolidBellRing } from "react-icons/bi";

const Home = () => {
  return (
    <div>
      <div className="header-div-container">
        {/* logo+ search container */}
        <div className="header-face-logo">
          <div>
            <img
              style={{ width: "50px" }}
              src="https://www.facebook.com/images/fb_icon_325x325.png"
              alt=""
            />
          </div>
          {/* //facebook search bar */}
          <div className="header-seachcontainer">
            <BsSearch size={20} />
            <div>
              <input
                style={{ border: "none", outlineStyle: "none", width: "200px" }}
                type="text"
                placeholder="Search Facebook"
              />
              <MdClear size={24} />
            </div>
          </div>
        </div>
        <div className="header-homecenter-div">
          <div className="header-middle-logoscontainer">
            <span>
              <AiFillHome size={32} />
            </span>
            <span>
              <PiVideo size={32} />
            </span>
            <span>
              <LuStore size={32} />
            </span>
            <span>
              <MdGroups2 size={32} />
            </span>
            <span>
              <RiGamepadFill size={32} />
            </span>
          </div>
        </div>
        <div className="header-end-container">
          <div>
            <span>
              <PiDiceSixBold size={32} />
            </span>
            <span>
              <BiSolidMessageAlt size={32} />
            </span>
            <span>
              <BiSolidBellRing size={32} />
            </span>
            <span>
              <MdAccountCircle size={32} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
