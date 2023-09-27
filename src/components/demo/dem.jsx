import { useRef, useState } from "react";
import "./App.css";
import { AiFillQuestionCircle, AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { dataArray, montharrey, yeararrey } from "../../data/data";

const Createnew = ({ shignPop }) => {
  const [data, setData] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
  });

  const enterData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let date = useRef();
  let month = useRef();
  let year = useRef();

  const [gender, setGender] = useState("");

  const radioList = (e) => {
    //setGender(e.target.value);
    setGender({ ...gender, [e.target.name]: e.target.value });
  };

  let newDatOfBirth = `${date.current?.value}/${month.current?.value}/${year.current?.value}`;

  let newObj = {
    ...data,
    date: newDatOfBirth,
    gender: gender,
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(newObj);
    console.log(date.current.value);

    const API = axios.create({ baseURL: "http://localhost:5000" });

    API.post("/signup", newObj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    setData({
      username: "",
      password: "",
      email: "",
      fullname: "",
      gender: "",
      date: "",
    });
  };

  const iconsSubmit = () => {
    shignPop();
  };

  return (
    <div className="create-main-div">
      <div className="one-main">
        <div className="first">
          <div className="first-in-first">
            <h1>Sign Up</h1>
            <span>It's quick and easy</span>
          </div>
          <div className="first-in-second">
            <AiOutlineCloseCircle
              onClick={iconsSubmit}
              className="close-icon"
            />
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <form onSubmit={handelSubmit}>
          <div className="second">
            <input
              type="text"
              placeholder="FirstName"
              className="tt-first-box"
              onChange={enterData}
              name="firstname"
            />
            <input
              type="text"
              placeholder="SurName"
              className="tt-first-box"
              onChange={enterData}
              name="surname"
            />
          </div>
          <div className="third">
            <input
              type="text"
              placeholder="Mobile or Email"
              className="tt-first-box-first"
              onChange={enterData}
              name="email"
            />
            <input
              type="text"
              placeholder="Password"
              className="tt-first-box-first"
              onChange={enterData}
              name="password"
            />
          </div>
          <span className="quest-icon">
            <span>Date Of Birth</span>
            <span>
              {" "}
              <AiFillQuestionCircle />
            </span>
          </span>
          <div className="date-of-row">
            <div className="date-m-y">
              <select ref={date} className="date-m-y">
                {dataArray.map((each, index) => (
                  <option key={index} value={each.value}>
                    {each.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="date-m-y">
              <select ref={month} className="date-m-y">
                {montharrey.map((each, index) => (
                  <option key={index} value={each.value}>
                    {each.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="date-m-y">
              <select ref={year} className="date-m-y">
                {yeararrey.map((each, index) => (
                  <option key={index} value={each.value}>
                    {" "}
                    {each.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <span className="quest-icon">
            <span>Gender</span>
            <span>
              {" "}
              <AiFillQuestionCircle />
            </span>
          </span>
          <div className="radio-btn">
            <div className="radion-first">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="Male"
                value="male"
                onChange={radioList}
                id="male"
              />
            </div>
            <div className="radion-first">
              <label htmlFor="female">FeMale</label>
              <input
                type="radio"
                name="Male"
                value="female"
                onChange={radioList}
                id="female"
              />
            </div>
            <div className="radion-first">
              <label htmlFor="custome">Custom</label>
              <input
                type="radio"
                name="Male"
                value="custom"
                id="custome"
                onChange={radioList}
              />
            </div>
          </div>
          <p>
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </p>
          <div className="btn-div-sign-up">
            <button type="submit" className="sign2-btn-div">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createnew;
