import { Helmet } from "react-helmet";
import { useAuth } from "../hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/phonebook/operations";
import { Container } from "components/App/App.styled";

export default function Home() {
  const { isLoggedIn, isVerified } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return isLoggedIn && isVerified ? (
    <Container>
      <Helmet>
        <title>Parish register</title>
      </Helmet>
      <div>
        <h1>Sacramental Records</h1>
      </div>
    </Container>
  ) : (
    <div>
      <Helmet>
        <title>Parish Register</title>
      </Helmet>
      <div>

        <div>Parish Register App</div>
      </div>
    </div>
  );
}
