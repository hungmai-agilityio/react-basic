import { useState } from 'react';

// Font Awesome
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Constants
import { SIZE, TYPE } from '@/constants';

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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
          <a href="/sign-up" className="text-dark underline">
            Register Here
          </a>
        </p>
      </form>
    </Form>
  );
};

export default SignIn;
