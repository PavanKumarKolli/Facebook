import { useRef, useState } from "react";
import "./Signup.css";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { dataArray, montharrey, yeararrey } from "../Data/Data";

const Signup = ({ closePopup }) => {
  const [showpopup, setShowpopup] = useState(false);
  const [data, setdata] = useState({
    firstname: "",
    surname: "",
    email: "",
    gender: "",
    // date: "",
  });

  const changealluser = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  let date = useRef();
  let month = useRef();
  let year = useRef();

  // const [gender, setGender] = useState("");

  // const radioList = (e) => {
  //   setGender({ ...gender, [e.target.name]: e.target.value });

  //   console.log(radioList);
  // };

  let newdateofbirth = `${date.current?.value}/${month.current?.value}/${year.current?.value}`;

  let newobj = { ...data, date: newdateofbirth };
  const SubmitAllForm = (e) => {
    e.preventDefault();
    console.log(newobj);

    const API = axios.create({ baseURL: "http://localhost:5000" });
    API.post("/signup", newobj)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    setdata({
      username: "",
      email: "",
      fullname: "",
      gender: "",
      date: "",
    });
  };
  console.log(data);
  const iconsSubmit = (e) => {
    // shignPop(false);
    closePopup();
  };
  return (
    <div className="signup-main">
      <div className="signup-seconhead-div">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "100%" }}>
            <h1>SignUp</h1>
            <p>It's quick and easy.</p>
            <hr />
          </div>
          <div>
            <GiCancel onClick={iconsSubmit} />
          </div>
        </div>
        <div className="signup-div-maincontainer">
          <div className="signup-input-container">
            <input
              onChange={changealluser}
              type="text"
              placeholder="First Name"
              name="firstname"
            />
            <input
              onChange={changealluser}
              type="text"
              placeholder="Surname"
              name="surname"
            />
          </div>
          <input
            onChange={changealluser}
            name="email"
            style={{
              width: "95%",
              height: "40px",
              outlineStyle: "none",
              border: "1px solid grey",
              backgroundColor: "transparent",
              background: "none",
              marginTop: "10px",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
            type="text"
            placeholder="Mobile number or email address"
          />
          <p>Date of Birth</p>
          <div className="signup-date-container">
            <div className="signup-maindic-container">
              {/* <select
                style={{ width: "100%", border: "none", outlineStyle: "none" }}
              >
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
                <option value={21}>21</option>
                <option value={22}>22</option>
                <option value={23}>23</option>
                <option value={24}>24</option>
                <option value={25}>25</option>
                <option value={26}>26</option>
                <option value={27}>27</option>
                <option value={28}>28</option>
                <option value={29}>29</option>
                <option value={30}>30</option>
                <option value={31}>31</option>
              </select> */}
              <select
                style={{
                  width: "100%",
                  border: "none",
                  outlineStyle: "none",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  background: "transparent",
                }}
                ref={date}
              >
                {dataArray.map((each, index) => (
                  <option key={index} value={each.value}>
                    {each.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="signup-maindic-container" s>
              <select
                ref={month}
                style={{
                  width: "100%",
                  border: "none",
                  outlineStyle: "none",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  background: "transparent",
                }}
              >
                {montharrey.map((each, index) => (
                  <option key={index} value={each.value}>
                    {each.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="signup-maindic-container">
              <select
                ref={year}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  outlineStyle: "none",
                }}
              >
                {yeararrey.map((each, index) => (
                  <option key={index} value={each.value}>
                    {each.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h5>Gender</h5>
          <div className="signup-gender-container">
            <span>
              <label for="male">Male</label>
              <input
                style={{ height: "12px", background: "transparent" }}
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={changealluser}
              />
            </span>
            <span>
              <label for="female">Female</label>
              <input
                style={{ height: "12px", background: "transparent" }}
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={changealluser}
              />
            </span>
            <span>
              <label for="Custom">Custom</label>
              <input
                style={{
                  height: "12px",
                  background: "transparent",
                }}
                type="radio"
                id="Custom"
                name="gender"
                value="custom"
                onChange={changealluser}
              />
            </span>
          </div>
        </div>
        <button
          onClick={SubmitAllForm}
          style={{
            width: "200px",
            height: "40px",
            marginTop: "20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "3px",
          }}
        >
          {" "}
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Signup;
