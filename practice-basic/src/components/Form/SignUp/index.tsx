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

const SignUp = ({
  nameValue,
  mailValue,
  passwordValue,
  confirmValue,
  onNameChange,
  onMailChange,
  onPasswordChange,
  onConfirmChange,
  onClick,
  message
}: AuthenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Form
      height="h-sign-up"
      title="Registration"
      sub="For Both Staff & Students"
    >
      <form>
        <Input
          label="Name"
          placeholder="Username"
          htmlFor="name"
          value={nameValue}
          onChange={onNameChange!}
          message={message?.name}
        />
        <Input
          label="Email"
          placeholder="username@mail.com"
          htmlFor="email"
          value={mailValue}
          onChange={onMailChange}
          type="email"
          message={message?.email}
        />
        <Input
          label="Password"
          placeholder="•••••••••••••"
          htmlFor="password"
          value={passwordValue}
          onChange={onPasswordChange}
          icon={showPassword ? faEye : faEyeSlash}
          type={showPassword ? 'text' : 'password'}
          onClick={toggleShowPassword}
          message={message?.password}
        />
        <Input
          label="Confirm Password"
          placeholder="•••••••••••••"
          htmlFor="confirm"
          value={confirmValue}
          onChange={onConfirmChange!}
          icon={showConfirmPassword ? faEye : faEyeSlash}
          type={showConfirmPassword ? TYPE.TEXT : TYPE.PASSWORD}
          onClick={toggleShowConfirmPassword}
          message={message?.confirm}
        />
        <Button
          name="Register"
          type={TYPE.PRIMARY}
          onClick={onClick!}
          size={SIZE.LARGE}
        />
        <p className="text-sm mt-10">
          Already a user?{' '}
          <a href="/sign-in" className="text-dark underline">
            Login now
          </a>
        </p>
      </form>
    </Form>
  );
};

export default SignUp;
