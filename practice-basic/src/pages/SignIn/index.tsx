import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent
} from 'react';
import { useNavigate } from 'react-router-dom';

// Utils
import validation from '@/utils/validation';

// Interfaces
import { ShowToastProps } from '@/interfaces';

// Services
import { login } from '@/services/user';
import { setCurrentData } from '@/utils/localStorage';
import { STORAGE_KEY, TYPE } from '@/constants';

// Components
import SignIn from '@/components/Form/SignIn';
import { MESSAGE_API } from '@/constants/message';

const SignInPage = ({ showToast }: ShowToastProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleSignIn = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const errors = validation({ email, password });
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
    } else {
      setErrorMessage({});

      const response = await login(email, password);

      if (response) {
        setCurrentData(STORAGE_KEY.USER, response.data[0]);
        navigate('/');
        
      } else {
        showToast({
          type: TYPE.ERROR,
          message: MESSAGE_API.LOGIN_ERROR
        });
      }
    }
  };

  const handleInputChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <div>
      <SignIn
        mailValue={email}
        passwordValue={password}
        onMailChange={handleInputChange(setEmail)}
        onPasswordChange={handleInputChange(setPassword)}
        onClick={handleSignIn}
        message={errorMessage}
      />
    </div>
  );
};

export default SignInPage;
