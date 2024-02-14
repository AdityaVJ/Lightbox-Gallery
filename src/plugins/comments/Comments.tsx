import * as React from "react";

import { PluginProps, addToolbarButton, createModule, PLUGIN_COMMENTS } from "../../index.js";
import { Title } from "./Title.js";
import { Description } from "./Description.js";
import { CommentsButton } from "./CommentsButton.js";
import { CommentsContextProvider } from "./CommentsContext.js";
import { resolveCommentsProps } from "./props.js";

/** Captions plugin */
export function Comments({ augment, addModule }: PluginProps) {
  augment(
    ({ comments: commentsProps, render: { slideFooter: renderFooter, ...restRender }, toolbar, ...restProps }) => {
      const comments = resolveCommentsProps(commentsProps);
      return {
        render: {
          slideFooter: ({ slide }) => (
            <>
              {renderFooter?.({ slide })}

              {slide.title && <Title title={slide.title} />}

              {slide.description && <Description description={slide.description} />}
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
