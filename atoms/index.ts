import { LoginUser} from "@/types/model";
import { atom } from "recoil";

export const userListState = atom<LoginUser[]>({
    key: "userListState", default: []
});

export const userNameState = atom({
    key: "userNameState", default: ""
});

export const isUserAuthenticate = atom({
    key: "userAuthenticated", default: false
});