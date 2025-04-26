import { StaticImageData } from "next/image";

export interface CardProps {
    src: StaticImageData;
    alt: string;
    width: number | `${number}` | undefined;
    height: number | `${number}` | undefined;
    title: string;
    content: string;
    buttonContent: string;
}