import { useAuth } from "../../hooks";
import { Link } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn, isVerified, user } = useAuth();
  return (
    <nav>
      {isLoggedIn && isVerified && (
        <>
          <Link to="/">{user.parish}</Link>
          <Link to="/sacraments">Sacraments</Link>
          <Link to="/add-baptism">Add Baptism</Link>
        </>
      )}
    </nav>
  );
};
