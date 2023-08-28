import React, { useState, useEffect } from "react";
import "./AddAllTask.css";
import EmojiPicker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import cross from "../images/close 1.svg";
import { useLocation, useNavigate } from "react-router";

function AddTask() {
  const location = useLocation();
  const navigate = useNavigate();
  const [opt] = useState(location.state);
  const [key, setKey] = useState(new Date().getTime());
  const [text, setText] = useState("");
  const [con2, setCon2] = useState(false);
  const [popUp, setPopUp] = useState("success-hide");
  const [isreq2, setIsreq2] = useState("is-req-span-2-hide");
  const getworkd = () => {
    let D = localStorage.getItem(opt);
    if (D) {
      return JSON.parse(D);
    } else {
      return [];
    }
  };
  const [d, setD] = useState(getworkd());

  const createFunc = () => {
    if (text === "") {
      setIsreq2("is-req-span-2");
    } else {
      setD([...d, {myId : key,
        myData:text}]);
      setText("");
      setPopUp("success-show");
      setTimeout(() => setPopUp("success-hide"), 1000);
      setIsreq2("is-req-span-2-hide");
    }
  };
  const textAreaFunc = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem(opt, JSON.stringify(d));
  }, [d]);
  const getEmoji = (elem) => {
    setText(text + elem.emoji);
    localStorage.removeItem("epr_suggested")
  };
  return (
    <div className="add-task-div">
      <div className={con2 ? "emoji-div-show" : "emoji-div-hide"}>
        <EmojiPicker
        suggestedEmojisMode="none"
          onEmojiClick={(elem) => getEmoji(elem)}
          previewConfig={{
            defaultEmoji: "",
            defaultCaption: "",
            showPreview: false,
          }}
          height="250px"
          width="87%"
        />
      </div>

      <div className="crossdiv">
        <img
          onClick={() => navigate(`/${opt}`)}
          src={cross}
          alt=""
          className="cross"
        />
      </div>
      <div className="add-task-heading-div">
        <h1>ADD A TASK</h1>
      </div>
      <form className="taskbar">
        <div className="select-task-div">
          <label htmlFor="category">Select a category</label>
          <div className="select" name="select a category" id="category">
            <span>{opt}</span>
          </div>
        </div>
        <div className="type-task-div">
          <label htmlFor="textarea">
            Type a task here{" "}
            <span onClick={() => setCon2(!con2)}>
              <MdOutlineEmojiEmotions />
            </span>
          </label>
          <textarea
            name="textarea"
            id="textarea"
            onChange={(e) => textAreaFunc(e)}
            value={text}
          ></textarea>
          <span className={isreq2}>Please type your task</span>
        </div>
        <div onClick={() => createFunc()} className="create-btn-div">
          CREATE
        </div>
      </form>
      <div className={popUp}>Task add successfully</div>
    </div>
  );
}

export default AddTask;