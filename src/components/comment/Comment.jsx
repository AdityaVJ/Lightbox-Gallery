import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

export default function Comment({
  userName,
  commentText,
  imageSrc,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: width < 431 ? "100%" : 398,
        height: 100,
        // backgroundColor: 'green'
      }}
    >
      <Grid container>
        <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: 80,
              height: 80,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", position: "relative", borderRadius: 50, objectFit: 'cover' }}
              src={imageSrc}
              alt="eventFlyer"
            />
          </div>
        </Grid>
        <Grid item xs={9} sm={9} md={9} style={{ display: 'flex', flexDirection: "column" }}>
          <div
            style={{
              width: "100%",
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "#fff",
              }}
            >
              {userName}
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#fff",
                marginTop: 10,
              }}
            >
              {commentText}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

Comment.defaultProps = {
  userName: "Harrison Wells",
  // commentText: "This is exactly the event to look out for!!",
  // commentText: "When you don't have the key to the lock, sometimes you have to kick in the door.",
  // commentText: "A man often meets his destiny on the very road he takes to avoid it.",
  commentText: "We can never learn to fly without crashing a few times.",
  imageSrc:
    "https://static.wikia.nocookie.net/arrow/images/c/c0/Harrison_Wells_%28Earth-1%29.png",
};
