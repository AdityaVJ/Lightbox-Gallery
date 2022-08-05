import * as React from "react";

import { Labels, Slide, SlideImage } from "../types.js";

export const clsx = (...classes: (string | boolean | undefined)[]) =>
    [...classes].filter((cls) => Boolean(cls)).join(" ");

const cssPrefix = "yarl__";

export const cssClass = (name: string) => `${cssPrefix}${name}`;

export const cssVar = (name: string) => `--${cssPrefix}${name}`;

export const label = (labels: Labels | undefined, lbl: string) => (labels && labels[lbl] ? labels[lbl] : lbl);

export const cleanup =
    (...cleaners: (() => void)[]) =>
    () => {
        cleaners.forEach((cleaner) => {
            cleaner();
        });
    };

export const makeUseContext =
    <T>(name: string, contextName: string, context: React.Context<T | null>) =>
    () => {
        const ctx = React.useContext(context);
        if (!ctx) {
            throw new Error(`${name} must be used within a ${contextName}.Provider`);
        }
        return ctx;
    };

export const hasWindow = () => typeof window !== "undefined";

export const isDefined = <T = any>(x: T | undefined): x is T => typeof x !== "undefined";

export const round = (value: number, decimals = 0) => {
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
};

export const isImageSlide = (slide: Slide): slide is SlideImage => !isDefined(slide.type) || slide.type === "image";
