import * as React from "react";

import { createIcon, createIconDisabled, IconButton, useLightboxProps } from "../../index.js";
import { useComments } from "./CommentsContext.js";

const commentsIcon = () => (
  <>
    <path strokeWidth={2} stroke="currentColor" strokeLinejoin="round" fill="none" d="M3 5l18 0l0 14l-18 0l0-14z" />
    <path d="M7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z" />
    {/* <path d="M30.28,110.09,49.37,91.78A3.84,3.84,0,0,1,52,90.72h60a2.15,2.15,0,0,0,2.16-2.16V9.82a2.16,2.16,0,0,0-.64-1.52A2.19,2.19,0,0,0,112,7.66H9.82A2.24,2.24,0,0,0,7.65,9.82V88.55a2.19,2.19,0,0,0,2.17,2.16H26.46a3.83,3.83,0,0,1,3.82,3.83v15.55ZM28.45,63.56a3.83,3.83,0,1,1,0-7.66h53a3.83,3.83,0,0,1,0,7.66Zm0-24.86a3.83,3.83,0,1,1,0-7.65h65a3.83,3.83,0,0,1,0,7.65ZM53.54,98.36,29.27,121.64a3.82,3.82,0,0,1-6.64-2.59V98.36H9.82A9.87,9.87,0,0,1,0,88.55V9.82A9.9,9.9,0,0,1,9.82,0H112a9.87,9.87,0,0,1,9.82,9.82V88.55A9.85,9.85,0,0,1,112,98.36Z" /> */}
  </>
);

const CommentsVisible = createIcon("CommentsVisible", commentsIcon());

const CommentsHidden = createIconDisabled("CommentsVisible", commentsIcon());

export function CommentsButton() {
  const { visible, show, hide } = useComments();
  const { render } = useLightboxProps();

  if (render.buttonComments) {
    return <>{render.buttonComments({ visible, show, hide })}</>;
  }

  return (
    <IconButton
      label={visible ? "Hide comments" : "Show comments"}
      icon={visible ? CommentsVisible : CommentsHidden}
      renderIcon={visible ? render.iconCommentsVisible : render.iconCommentsHidden}
      onClick={visible ? hide : show}
    />
  );
}
