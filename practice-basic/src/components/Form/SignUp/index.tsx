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
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMoveToSignIn = () => {
    navigate(`${URLS.SIGN_IN}`);
  };

  return (
    <Form title="Registration" sub="For Both Staff & Students">
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
        <div className="mt-8">
          <Button
            name="Register"
            type={TYPE.PRIMARY}
            onClick={onClick!}
            size={SIZE.LARGE}
          />
          <p className="text-sm mt-10">
            Already a user?{' '}
            <span className="text-dark underline" onClick={handleMoveToSignIn}>
              Login now
            </span>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default SignUp;
