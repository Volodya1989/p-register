// Separate named imports, this makes the code more readable
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

// import { fetchContacts } from "redux/phonebook/operations";
import { Container } from "components/App/App.styled";

const Main = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Container>
      <Helmet>
        <title>Parish Register</title>
      </Helmet>
      <div>
        <h1>Parish Register</h1>
      </div>
      <div>
        <h1>Main Page</h1>
      </div>
    </Container>
  );
};

export default Main;
