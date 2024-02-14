import * as React from "react";

import { clsx, cssVar, Slide, useLightboxProps } from "../../index.js";
import { cssPrefix } from "./utils.js";
import { defaultCommentsProps, useCommentsProps } from "./props.js";
import { useComments } from "./CommentsContext.js";

export type DescriptionProps = Pick<Slide, "description">;

export function Description({ description }: DescriptionProps) {
  const { descriptionTextAlign, descriptionMaxLines } = useCommentsProps();
  const { styles } = useLightboxProps();
  const { visible } = useComments();

  if (!visible) return null;

  // noinspection SuspiciousTypeOfGuard
  return (
    <div
      style={styles.captionsDescriptionContainer}
      className={clsx(cssPrefix("comments_container"), cssPrefix("description_container"))}
    >
      <div
        className={cssPrefix("description")}
        style={{
          ...(descriptionTextAlign !== defaultCommentsProps.descriptionTextAlign ||
          descriptionMaxLines !== defaultCommentsProps.descriptionMaxLines
            ? {
                [cssVar("slide_description_text_align")]: descriptionTextAlign,
                [cssVar("slide_description_max_lines")]: descriptionMaxLines,
              }
            : null),
          ...styles.captionsDescription,
        }}
      >
        {typeof description === "string"
          ? description
              .split("\n")
              // eslint-disable-next-line react/no-array-index-key
              .flatMap((line, index) => [...(index > 0 ? [<br key={index} />] : []), line])
          : description}
      </div>
    </div>
  );
}
