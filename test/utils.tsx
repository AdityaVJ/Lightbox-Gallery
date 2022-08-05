import * as React from "react";
import { screen } from "@testing-library/react";

import Lightbox from "../src/index.js";

export const lightbox = (props?: Parameters<typeof Lightbox>[0]) => <Lightbox open {...props} />;

export const querySelector = (selector: string) => screen.getByRole("presentation").querySelector(selector);

export const findCurrentSlide = () => querySelector("div.yarl__slide_current");

export const findCurrentImage = () => findCurrentSlide()?.querySelector("img")?.src;
