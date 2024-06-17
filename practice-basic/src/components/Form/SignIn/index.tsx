import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Font Awesome
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Constants
import { SIZE, TYPE, URLS } from '@/constants';

// Interface
import { AuthenProps } from '@/interfaces';

// Components
import Button from '@/components/Button/Default';
import Form from '@/components/Form';
import { Input } from '@/components/Input';
import Checkbox from '@/components/Checkbox';

const SignIn = ({
  mailValue,
  passwordValue,
  onMailChange,
  onPasswordChange,
  onClick,
  message
}: AuthenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMoveToSignUp = () => {
    navigate(`${URLS.SIGN_UP}`);
  };

  return (
    <Form
      height="h-sign-in"
      title="Welcome"
      sub="Sign in to continue to yourDigital Library"
    >
      <form>
        <Input
          label="Email"
          placeholder="username@mail.com"
          htmlFor="email"
          value={mailValue}
          onChange={onMailChange}
          message={message?.email}
        />
        <Input
          label="Password"
          placeholder="•••••••••••••"
          htmlFor="password"
          value={passwordValue}
          onChange={onPasswordChange}
          icon={showPassword ? faEye : faEyeSlash}
          type={showPassword ? TYPE.TEXT : TYPE.PASSWORD}
          onClick={toggleShowPassword}
          message={message?.password}
        />

        <div className="flex justify-between my-5">
          <Checkbox label="Remember me" />
          <a href="" className="underline">
            Forgot password?
          </a>
        </div>
        <Button
          name="Login"
          type={TYPE.PRIMARY}
          onClick={onClick}
          size={SIZE.LARGE}
        />
        <p className="text-sm mt-16">
          New User ?{' '}
          <a className="text-dark underline" onClick={handleMoveToSignUp}>
            Register Here
          </a>
        </p>
      </form>
    </Form>
  );
};

export default SignIn;
