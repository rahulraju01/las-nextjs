import { User } from "next-auth";

export interface LoginUser extends User {
  csrfToken: string
}