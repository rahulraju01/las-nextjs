'use client'
import { Content } from "@/components/content/Content";
import { RecoilRoot } from "recoil";

export const HomePage = () => {
    return (
        <>
            <h1>Welcome to Home Page</h1>
            <RecoilRoot>
                <Content />
            </RecoilRoot>
        </>
    );
}