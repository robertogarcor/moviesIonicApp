import { User } from "src/app/users/data/domain/user";

export interface UserToken {
    token : string,
    user : User,
}