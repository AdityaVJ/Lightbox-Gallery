import * as React from "react";

import { CommentsRef, ComponentProps, makeUseContext } from "../../index.js";
import { resolveCommentsProps } from "./props.js";

export const CommentsContext = React.createContext<CommentsRef | null>(null);

export const useComments = makeUseContext("useCaptions", "CaptionsContext", CommentsContext);

export function CommentsContextProvider({ comments: captions, children }: ComponentProps) {
  const { ref } = resolveCommentsProps(captions);

  const [visible, setVisible] = React.useState(true);

  const context = React.useMemo(
    () => ({
      visible,
      show: () => setVisible(true),
      hide: () => setVisible(false),
    }),
    [visible],
  );

  React.useImperativeHandle(ref, () => context, [context]);

  return <CommentsContext.Provider value={context}>{children}</CommentsContext.Provider>;
}
