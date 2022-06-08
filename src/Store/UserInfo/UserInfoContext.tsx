import { Context, createContext } from "react";
import { UserInfo } from "../../Models/UserInfo";

export type ActionProps = {
  type: string;
  payload: any;
};

export type UserInfoContextType = {
  userInfo: UserInfo;
  changeUserName: (userName: string) => void;
  changeEmail: (email: string) => void;
};

const UserInfoContext: Context<UserInfoContextType> =
  createContext<UserInfoContextType>({
    userInfo: {
      userName: "",
      email: "",
    },
    changeUserName: (userName: string) => {},
    changeEmail: (email: string) => {},
  });

export default UserInfoContext;
