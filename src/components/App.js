import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentGamer } from 'redux/auth/authOperations';
import { getCredits } from 'redux/credits/creditsOperations';
import { PATH_ROUTES } from 'constants';
import Layout from './Layout/Layout';
import { selectIsAuth } from 'redux/auth/authSelectors';
import { getIncome } from 'redux/income/incomeOperations';
import { getExpenses } from 'redux/expenses/expensesOperations';
import { getEquities } from 'redux/equities/equitiesOperations';

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
  // useEffect(() => {
  //   dispatch(getCurrentGamer());
  // }, [dispatch]);

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
        <Route index element={<HomePage />} />
        <Route path={PATH_ROUTES.register} element={<RegisterPage />} />
        <Route path={PATH_ROUTES.login} element={<LoginPage />} />
        <Route path={PATH_ROUTES.gamerPage} element={<GamerPage />} />
        <Route path={PATH_ROUTES.credits} element={<CreditsPage />} />
        <Route path={PATH_ROUTES.expenses} element={<ExpensesPage />} />
        <Route path={PATH_ROUTES.income} element={<IncomePage />} />
        <Route path={PATH_ROUTES.equities} element={<EquitiesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
