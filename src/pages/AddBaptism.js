import { Helmet } from "react-helmet";
import { useAuth } from "../hooks";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchContacts } from "redux/phonebook/operations";
import { Container } from "components/App/App.styled";

export default function AddBaptism() {
  const { isLoggedIn, isVerified } = useAuth();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(fetchContacts());
  //   }
  // }, [dispatch, isLoggedIn]);

  return (
    isLoggedIn &&
    isVerified && (
      <Container>
        <Helmet>
          <title>Add Baptism</title>
        </Helmet>
        <div>
          <h1>Create Baptismal Record</h1>
        </div>
      </Container>
    )
  );
}
