import { LightboxProps, useLightboxProps } from "../../index.js";

export const defaultCommentsProps = {
  descriptionTextAlign: "start" as const,
  descriptionMaxLines: 3,
  showToggle: true,
};

export const resolveCommentsProps = (comments: LightboxProps["comments"]) => ({
  ...defaultCommentsProps,
  ...comments,
});

export function useCommentsProps() {
  const { comments } = useLightboxProps();
  return resolveCommentsProps(comments);
}
