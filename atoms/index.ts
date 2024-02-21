import { User } from "@/lib/utils";
import { atom } from "recoil";

export const userListState = atom<User[]>({
key: "userListState", default: []
});

export const userNameState = atom({
    key: "userNameState", default: ""
});