import * as React from "react";
import PropTypes from "prop-types";

import { Plugin, SlideTypesPropTypes } from "../types.js";
import { clsx, cssClass, useContainerRect } from "../core/index.js";

export interface SlideVideo {
    type: "video";
    poster?: string;
    width?: number;
    height?: number;
    sources?: { src: string; type: string }[];
}

declare module "../types.js" {
    interface SlideTypes {
        SlideVideo: SlideVideo;
    }
}

SlideTypesPropTypes.push(
    PropTypes.shape({
        type: PropTypes.oneOf(["video" as const]).isRequired,
        poster: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        sources: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            }).isRequired
        ),
    })
);

export const VideoSlide = ({ slide: { sources, poster, width, height } }: { slide: SlideVideo }) => {
    const { setContainerRef, containerRect } = useContainerRect();

    const scaleWidthAndHeight = () => {
        if (!width || !height || !containerRect) return null;

        const widthBound = width / height > containerRect.width / containerRect.height;
        return {
            width: widthBound ? containerRect.width : Math.round((containerRect.height / height) * width),
            height: !widthBound ? containerRect.height : Math.round((containerRect.width / width) * height),
        };
    };

    return (
        <>
            {sources && (
                <div
                    ref={setContainerRef}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    className={clsx(cssClass("video_container"), cssClass("flex_center"))}
                >
                    {containerRect && (
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <video controls playsInline poster={poster} {...scaleWidthAndHeight()}>
                            {sources.map(({ src, type }, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <source key={index} src={src} type={type} />
                            ))}
                        </video>
                    )}
                </div>
            )}
        </>
    );
};

export const Video: Plugin = ({ augment }) => {
    augment(({ render: { slide: renderSlide, ...restRender }, ...restProps }) => ({
        render: {
            slide: (slide) => {
                if ("type" in slide && slide.type === "video") {
                    return <VideoSlide slide={slide} />;
                }
                return renderSlide(slide);
            },
            ...restRender,
        },
        ...restProps,
    }));
};
