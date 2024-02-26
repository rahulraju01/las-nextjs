import { User } from "@/types/model";
import { atom } from "recoil";

export const userListState = atom<User[]>({
    key: "userListState", default: []
});

export const userNameState = atom({
    key: "userNameState", default: ""
});

export const isUserAuthenticate = atom({
    key: "userAuthenticated", default: false
});