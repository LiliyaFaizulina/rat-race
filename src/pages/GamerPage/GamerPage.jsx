import GamerCard from 'components/GamerCard/GamerCard';
import { useSelector } from 'react-redux';
import { selectGamer } from 'redux/auth/authSelectors';
const GamerPage = () => {
  const gamer = useSelector(selectGamer);
  return (
    <div>
      Gamer page
      <GamerCard data={gamer} />
    </div>
  );
};

export default GamerPage;
