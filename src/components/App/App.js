import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";

import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "../Layout";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "../../hooks";
// import Home from "../../pages/Home";

const HomePage = lazy(() => import("../../pages/Home"));
const AddBaptism = lazy(() => import("../../pages/AddBaptism"));

const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
// const MainPage = lazy(() => import("../../pages/Main"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="/sacraments"
          element={
            <PrivateRoute redirectTo="/login" component={<HomePage />} />
          }
        />
        <Route
          path="/add-baptism"
          element={
            <PrivateRoute redirectTo="/login" component={<AddBaptism />} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
