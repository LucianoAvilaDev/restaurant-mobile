import { LoggedUserType } from "./LoggedUserType";
import { SignInType } from "./SignInType";

export type AuthContextType = {
    isAuthenticated: boolean;
    ref: string;
    setRef: Function;
    isLoading: boolean;
    setIsLoading: Function;
    user: LoggedUserType | null;
    token: string|null;
    signIn: (data: SignInType) => Promise<void>;
    signOut: () => Promise<void>;
};
