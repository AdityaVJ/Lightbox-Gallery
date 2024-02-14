import * as React from "react";

import { PluginProps, addToolbarButton, createModule, PLUGIN_COMMENTS } from "../../index.js";
// import { Title } from "./Title.js";
// import { Description } from "./Description.js";
import { CommentsButton } from "./CommentsButton.js";
import { CommentsContextProvider } from "./CommentsContext.js";
import { resolveCommentsProps } from "./props.js";
// import CommentList from "../../components/comment-list/CommentList.jsx";
// import CommentList from "../../components";

const commentArgs = {
  commentTextField: "This is a comment",
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

/** Captions plugin */
export function Comments({ augment, addModule }) {
  augment(
    ({ comments: commentsProps, render: { slideFooter: renderFooter, ...restRender }, toolbar, ...restProps }) => {
      const comments = resolveCommentsProps(commentsProps);
      return {
        render: {
          slideFooter: ({ slide }) => (
            <>
              {renderFooter?.({ slide })}
              {/* {<CommentList {...commentArgs} />} */}

              {/* {slide.title && <Title title={slide.title} />} */}

              {/* {slide.description && <Description description={slide.description} />} */}
            </>
          ),
          ...restRender,
        },
        toolbar: addToolbarButton(toolbar, PLUGIN_COMMENTS, comments.showToggle === false ? <CommentsButton /> : null),
        comments,
        ...restProps,
      };
    },
  );

  addModule(createModule(PLUGIN_COMMENTS, CommentsContextProvider));
}
