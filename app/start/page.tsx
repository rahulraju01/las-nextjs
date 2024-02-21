'use client'
import { Content } from "@/components/content/Content";
import { RecoilRoot } from "recoil";

export const HomePage = () => {
    return (
        <>
            <h1>Welcome to Home Page</h1>
            {/* <Link href="/start/licenseContracts"> License Agreement Screen</Link><br/>
        <Link href="/start/licenseContractsWoBillingRules"> License Agreements Without Billing Rules Screen</Link> */}
            <RecoilRoot>
                <Content />
            </RecoilRoot>
        </>
    );
}