import { useAuth } from "../../hooks";
import { Link } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn, isVerified } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && isVerified && <Link to="/sacraments">Sacraments</Link>}
    </nav>
  );
};
