import * as React from "react";

import { Callback, PLUGIN_COMMENTS, RenderFunction } from "../../index.js";

import { Comments } from "./Comments.jsx";

declare module "../../types.js" {
  // noinspection JSUnusedGlobalSymbols
  interface GenericSlide {
    /** slide title */
    title?: React.ReactNode;
    /** slide description */
    description?: React.ReactNode;
  }

  // noinspection JSUnusedGlobalSymbols
  interface ToolbarButtonKeys {
    [PLUGIN_COMMENTS]: null;
  }

  interface LightboxProps {
    /** Comments plugin settings */
    comments?: {
      /** Comments plugin ref */
      ref?: React.ForwardedRef<CommentsRef>;
      /** if `true`, show Comments Toggle button in the toolbar */
      showToggle?: boolean;
      /** description text alignment */
      descriptionTextAlign?: "start" | "end" | "center";
      /** maximum number of lines to display in the description section */
      descriptionMaxLines?: number;
    };
  }

  // noinspection JSUnusedGlobalSymbols
  interface SlotType {
    /** comments title customization slot */
    commentsTitle: "commentsTitle";
    /** comments title container customization slot */
    commentsTitleContainer: "commentsTitleContainer";
    /** comments description customization slot */
    commentsDescription: "commentsDescription";
    /** comments description container customization slot */
    commentsDescriptionContainer: "commentsDescriptionContainer";
  }

  // noinspection JSUnusedGlobalSymbols
  interface Render {
    /** render custom Comments Visible icon */
    iconCommentsVisible?: RenderFunction;
    /** render custom Comments Hidden icon */
    iconCommentsHidden?: RenderFunction;
    /** render custom Comments button */
    buttonComments?: RenderFunction<CommentsRef>;
  }

  /** Comments plugin ref */
  interface CommentsRef {
    /** if `true`, comments are visible */
    visible: boolean;
    /** show comments */
    show: Callback;
    /** hide comments */
    hide: Callback;
  }
}

export default Comments;
