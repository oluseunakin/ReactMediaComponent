/// <reference types="react" />
type Media = {
    url: string;
    ct: string;
};
export declare const MediaComponent: (props: {
    sources: Media[];
}) => import("react").JSX.Element;
export {};
