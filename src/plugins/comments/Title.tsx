import * as React from "react";

import { clsx, cssVar, Slide, useController, useLightboxProps } from "../../index.js";
import { cssPrefix } from "./utils.js";
import { useComments } from "./CommentsContext.js";

export type TitleProps = Pick<Slide, "title">;

export function Title({ title }: TitleProps) {
  const { toolbarWidth } = useController();
  const { styles } = useLightboxProps();
  const { visible } = useComments();

  if (!visible) return null;

  return (
    <div
      style={styles.captionsTitleContainer}
      className={clsx(cssPrefix("comments_container"), cssPrefix("title_container"))}
    >
      <div
        className={cssPrefix("title")}
        style={{
          ...(toolbarWidth ? { [cssVar("toolbar_width")]: `${toolbarWidth}px` } : null),
          ...styles.captionsTitle,
        }}
      >
        {title}
      </div>
    </div>
  );
}
