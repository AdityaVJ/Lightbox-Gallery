import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Comment from "../comment/Comment.jsx";
import Button from "../button/Button.jsx";
import "./CommentList.css";

export default function CommentList({ commentTextField, onButtonClick, commentsArray }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [commentsText, setCommentsText] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setCommentsText(commentTextField);
  }, [commentTextField]);

  return (
    <div
      style={{
        width: width < 431 ? "100%" : 498,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 10,
        }}
      >
        <TextField
          style={{ width: "80%" }}
          id="outlined-helperText"
          label="Comment"
          onChange={(event) => setCommentsText(event.target.value)}
          defaultValue={commentsText}
        />
        <Button label={"Post"} />
      </div>
      <div className="font">
      {commentsArray?.map((item, index) => {
        return <Comment {...item} key={index} />;
      })}
      </div>
    </div>
  );
}

CommentList.propTypes = {
  commentTextField: PropTypes.string,
  onButtonClick: PropTypes.func,
  commentsArray: PropTypes.array,
};

CommentList.defaultProps = {
  commentTextField: null,
  onButtonClick: null,
  commentsArray: [
    {
      userName: "Harrison Wells",
      commentText: "A man often meets his destiny on the very road he takes to avoid it.",
      imageSrc: "https://static.wikia.nocookie.net/arrow/images/c/c0/Harrison_Wells_%28Earth-1%29.png",
    },
    {
      userName: "Tony Stark",
      commentText: "Sometimes you gotta run before you can walk.",
      imageSrc: "https://static.wikia.nocookie.net/marvelcentral/images/9/97/Tony-Stark.jpg",
    },
    {
      userName: "Barry Allen",
      commentText: "Lets just say.. I am gonna run to this event tonight!",
      imageSrc: "https://static.wikia.nocookie.net/garpedia/images/d/d5/Barry_Allen.jpg",
    },
  ],
};
