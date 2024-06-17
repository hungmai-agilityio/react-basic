import React, { useState, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

// Interfaces
import { IAccount, IProfile, ShowToastProps } from '@/interfaces';

// Services
import { addAccount, addProfileUser, getUserByEmail } from '@/services/user';

// Utils
import validation from '@/utils/validation';

//Components
import SignUp from '@/components/Form/SignUp';
import { TYPE } from '@/constants';
import { MESSAGE_API, MESSAGE_VALID } from '@/constants/message';

const SignUpPage = ({ showToast }: ShowToastProps) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleSignUp = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const errors = validation({ name, email, password, confirm });
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
    } else {
      setErrorMessage({});

      const existingUser = await getUserByEmail(email);

      if (existingUser.length) {
        showToast({
          type: TYPE.ERROR,
          message: MESSAGE_VALID.EMAIL_EXIST
        });
      } else {
        const newAccount: IAccount = {
          id: uuidv4(),
          userName: name,
          email,
          password,
          created_at: new Date(),
          updated_at: new Date()
        };

        const account = await addAccount(newAccount);

        const newProfile: IProfile = {
          id: '',
          user_id: newAccount.id,
          avatar: '',
          phone: '',
          bio: ''
        };

        const profile = await addProfileUser(newProfile);

        if (account.data && profile.data) {
          showToast({
            type: TYPE.SUCCESS,
            message: MESSAGE_API.ADD_SUCCESS
          });

          navigate('/sign-in');
        }
      }
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <div>
      <SignUp
        nameValue={name}
        mailValue={email}
        passwordValue={password}
        confirmValue={confirm}
        onNameChange={handleInputChange(setName)}
        onMailChange={handleInputChange(setEmail)}
        onPasswordChange={handleInputChange(setPassword)}
        onConfirmChange={handleInputChange(setConfirm)}
        onClick={handleSignUp}
        message={errorMessage}
      />
    </div>
  );
};

export default SignUpPage;
