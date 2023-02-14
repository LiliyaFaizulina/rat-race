import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentGamer } from 'redux/auth/authOperations';
import { getCredits } from 'redux/credits/creditsOperations';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { getIncome } from 'redux/income/incomeOperations';
import { getExpenses } from 'redux/expenses/expensesOperations';
import { getEquities } from 'redux/equities/equitiesOperations';
import { PATH_ROUTES } from 'constants';
import Layout from './Layout/Layout';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { PublicRoute } from 'HOCs/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const GamerPage = lazy(() => import('../pages/GamerPage/GamerPage'));
const CreditsPage = lazy(() => import('../pages/CreditsPage/CreditsPage'));
const IncomePage = lazy(() => import('../pages/IncomePage/IncomePage'));
const ExpensesPage = lazy(() => import('../pages/ExpensesPage/ExpensesPage'));
const EquitiesPage = lazy(() => import('../pages/EquitiesPage/EquitiesPage'));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (!isAuth) {
      dispatch(getCurrentGamer());
    } else {
      dispatch(getCredits());
      dispatch(getIncome());
      dispatch(getExpenses());
      dispatch(getEquities());
    }
  }, [dispatch, isAuth]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute restricted>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path={PATH_ROUTES.register}
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path={PATH_ROUTES.login}
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={PATH_ROUTES.gamerPage}
          element={
            <PrivateRoute>
              <GamerPage />
            </PrivateRoute>
          }
        />
        <Route
          path={PATH_ROUTES.credits}
          element={
            <PrivateRoute>
              <CreditsPage />
            </PrivateRoute>
          }
        />
        <Route
          path={PATH_ROUTES.expenses}
          element={
            <PrivateRoute>
              <ExpensesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={PATH_ROUTES.income}
          element={
            <PrivateRoute>
              <IncomePage />
            </PrivateRoute>
          }
        />
        <Route
          path={PATH_ROUTES.equities}
          element={
            <PrivateRoute>
              <EquitiesPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
