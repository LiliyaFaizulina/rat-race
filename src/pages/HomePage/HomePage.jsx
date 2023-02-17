import { Link } from 'react-router-dom';
import { PATH_ROUTES } from 'constants';

const HomePage = () => {
  const mainColor = 'primary';
  return (
    <section className="section">
      <div className="container is-max-desktop">
        <h1 className="title has-text-centered is-size-4-desktop  is-family-monospace is-italic">
          Rat race
        </h1>
        <div
          className={`box has-background-${mainColor}-light has-text-${mainColor}-dark  is-size-4-desktop`}
        >
          <p>
            Welcome to Rat race App! <br />
            This app has been designed to improve the usability of the Rat Race
            board game. Here you can create a player, change information about a
            job title and dream, add information about income by categories,
            expenses by categories, credits and equities, change financial info.
            And App will calculate your total income, total cash flow, total
            expenses and receivables. To start{' '}
            <Link to={PATH_ROUTES.register}>register</Link> new player or{' '}
            <Link to={PATH_ROUTES.login}>login</Link> if you have an account and
            have fun!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
