import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Comment from "../comment/Comment.jsx";
import Button from "../button/Button.jsx";

export default function CommentList({ commentTextField, showButton, onButtonClick, commentsArray }) {
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

  const defaultButtonProps = {
    backgroundColor: null,
    borderColor: null,
    color: null,
    hoverColor: null,
    size: "medium",
    onClick: () => console.log("clicked"),
    label: "button",
    iconLeft: false,
    iconRight: false,
    variant: "contained",
    showAnimation: false,
    styles: {},
    icon: undefined,
    disabled: false,
    borderRadius: 0,
  };

  return (
    <div
      style={{
        width: width < 431 ? "100%" : 498,
        // height: 100,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
        <TextField
          style={{ width: "80%", margin: 10 }}
          id="outlined-helperText"
          label="Comment"
          onChange={(event) => setCommentsText(event.target.value)}
          defaultValue={commentsText}
        />
        {showButton ? <Button {...defaultButtonProps} /> : null}
      </div>
      {commentsArray?.map((item, index) => {
        return <Comment {...item} key={index} />;
      })}
    </div>
  );
}

CommentList.propTypes = {
  commentTextField: PropTypes.string,
  showButton: PropTypes.bool,
  onButtonClick: PropTypes.func,
  commentsArray: PropTypes.array,
};

CommentList.defaultProps = {
  commentTextField: null,
  showButton: true,
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
