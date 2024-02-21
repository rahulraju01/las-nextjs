'use client';
import { userListState } from "@/atoms";
import { useRecoilState } from "recoil";

export const UserDashboard = () => {
    const [userData] = useRecoilState(userListState);
    console.log(`Total User Data: ${userData.length}`);
    return <> {userData.map(x => <li key={x.id}>{x.name}</li>)}</>;
}