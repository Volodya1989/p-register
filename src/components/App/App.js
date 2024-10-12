// Separate named imports, this makes the code more readable
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "../../hooks";

const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
const MainPage = lazy(() => import("../../pages/Main"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/sacraments"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/sacraments"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/sacraments"
          element={
            <PrivateRoute redirectTo="/login" component={<MainPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
