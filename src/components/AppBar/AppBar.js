import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { Header } from "./AppBar.styled";

import { useAuth } from "../../hooks";

export const AppBar = () => {
  const { isLoggedIn, isVerified } = useAuth();
  console.log("Both", isVerified && isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn && isVerified ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
