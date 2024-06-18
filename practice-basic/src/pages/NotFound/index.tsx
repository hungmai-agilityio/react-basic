import { useNavigate } from 'react-router-dom';

// Constants
import { SIZE, TYPE, URLS } from '@/constants';

// Components
import Button from '@/components/Button/Default';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate(URLS.HOME);
  };

  return (
    <div className="bg-404 flex flex-col items-center h-screen">
      <div className="mb-8">
        <img src="/images/404.gif" alt="404 page" />
      </div>

      <Button
        name="Go Home"
        type={TYPE.SECOND}
        size={SIZE.SMALL}
        onClick={handleBackHome}
      />
    </div>
  );
};

export default NotFound;
