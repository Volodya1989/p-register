import { Helmet } from "react-helmet";
import { useAuth } from "../hooks";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "components/App/App.styled";
import { getBaptisms } from "redux/baptisms/selectors";
import { fetchBaptisms } from "redux/baptisms/operations";
import AddBaptismForm from "components/AddBaptismForm";
export default function AddBaptism() {
  const { isLoggedIn, isVerified } = useAuth();
  const { baptisms } = useSelector(getBaptisms);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && baptisms.length === 0) {
      dispatch(fetchBaptisms());
    }
  }, [dispatch, isLoggedIn, baptisms.length]);
  return (
    isLoggedIn &&
    isVerified && (
      <Container>
        <Helmet>
          <title>Add Baptism</title>
        </Helmet>
        <div>
          <h1>Create Baptismal Record</h1>
          <div>Total Number of Baptisms: {baptisms.total}</div>
        </div>
        <AddBaptismForm />
      </Container>
    )
  );
}
