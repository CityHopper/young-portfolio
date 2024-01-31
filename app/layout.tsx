import type {Metadata} from "next";
import "./globals.css";
import {Nanum_Gothic, Noto_Serif_KR} from "next/font/google";
import React, {ReactNode} from "react";

const cls = (...classnames: string[]) => {
    return classnames.join(" ");
};

const nanumGothic = Nanum_Gothic({
    subsets: ["latin"],
    weight: ["400", "700", "800"],
});

const notoSerifKR = Noto_Serif_KR({
    subsets: ["latin"],
    weight: ["200", "400", "700"],
    variable: "--notoSerif",
});

export const metadata: Metadata = {
    title: "Younghoon KANG, FE Developer",
    description: "Younghoon KANG, a Front-end Web Developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cls(nanumGothic.className, notoSerifKR.variable)}>{children}</body>
        </html>
    );
}
