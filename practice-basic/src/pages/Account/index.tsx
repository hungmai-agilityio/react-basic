import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Constants
import {
  SIZE,
  TYPE,
  STORAGE_KEY,
  MESSAGE_VALID,
  VALID_IMAGE,
  END_POINT,
  MESSAGE_API
} from '@/constants';

// Interfaces
import { IAccount, IProfile, ShowToastProps } from '@/interfaces';

// Utils
import { convertBase64, currentUser, setCurrentData } from '@/utils';

// Services
import { getUserByEmail, getUserProfileById, updateUser } from '@/services';

// Font Awesome
import { faEdit } from '@fortawesome/free-solid-svg-icons';

// Utils
import validation from '@/utils/validation';

// Components
import Avatar from '@/components/Avatar';
import Button from '@/components/Button/Default';
import ButtonIcon from '@/components/Button/Icon';
import { Input } from '@/components/Input';

const Account = ({ showToast }: ShowToastProps) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [uploadImage, setUploadImage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>({});
  const [user, setUser] = useState<IAccount>({
    id: '',
    password: '',
    updated_at: new Date(),
    userName: '',
    email: '',
    created_at: new Date()
  });
  const [profile, setProfile] = useState<IProfile>({
    id: '',
    user_id: '',
    avatar: '',
    phone: '',
    bio: ''
  });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const userData = currentUser() as IAccount;
      setUser(userData);

      const response = await getUserProfileById(userData?.id);
      if (response.data) {
        setProfile(response.data);
      }
    };

    fetchData();
  }, [navigate]);

  // Handle change user value
  const handleUserChange =
    (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setUser({ ...user!, [field]: value });
    };

  // Handle change profile value
  const handleProfileChange =
    (field: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setProfile({ ...profile!, [field]: value });
    };

  // Handle user profile updates
  const handleSubmit = async () => {
    const data = {
      name: user.userName,
      email: user.email
    };

    // Validate user data
    const validationErrors = validation(data);

    if (Object.keys(validationErrors).length) {
      setErrorMessage(validationErrors);
      return;
    } else {
      setErrorMessage({});
    }

    const existingUser = await getUserByEmail(user.email);
    const emailExists = existingUser.length && existingUser[0].id !== user.id;

    if (emailExists) {
      showToast({
        type: TYPE.ERROR,
        message: MESSAGE_VALID.EMAIL_EXIST
      });
    } else {
      const data = {
        ...user,
        userName: user.userName,
        email: user.email,
        updated_at: new Date()
      };

      const profileData = {
        avatar: uploadImage || profile.avatar,
        phone: profile.phone,
        bio: profile.bio
      };

      const accountResponse = await updateUser(
        END_POINT.ACCOUNT,
        user.id,
        data
      );
      const profileResponse = await updateUser(
        END_POINT.PROFILE,
        profile.id,
        profileData
      );

      if (accountResponse.data && profileResponse.data) {
        showToast({
          type: TYPE.SUCCESS,
          message: MESSAGE_API.UPDATE_SUCCESS
        });

        setCurrentData(STORAGE_KEY.USER, data);
      } else {
        showToast({
          type: TYPE.ERROR,
          message: MESSAGE_API.UPDATE_ERROR
        });
      }
    }
  };

  // Handle set enabled for edit value
  const handleEditProfile = () => {
    setIsDisabled(false);
  };

  // Handle upload image
  const handleUploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const file = files && files[0];
    if (file) {
      if (!VALID_IMAGE.includes(file.type)) {
        showToast({ type: TYPE.ERROR, message: MESSAGE_VALID.UPLOAD });
        return;
      }
    }
    const base64 = (await convertBase64(file!)) as string;
    setUploadImage(base64);
  };

  const idCode = user?.id.split('-').join('');

  return (
    <div className="m-form w-10/12 h-form bg-white rounded-xl py-8 px-5 text-dark">
      <p className="text-orange-550 text-md font-bold">Account Setting</p>
      <div className="mt-14">
        <p className="font-medium text-base">Your Profile Picture</p>
        <div className="relative mt-4">
          <Avatar
            avatar={uploadImage || profile.avatar}
            name={user?.userName}
            size={SIZE.LARGE}
          />
          <Input
            onChange={handleUploadImage}
            htmlFor="account-upload"
            type={TYPE.FILE}
            styles="hidden"
            disabled={isDisabled}
          />
          <label
            htmlFor="account-upload"
            className="cursor-pointer text-dark underline text-xs-2 m-1 rounded-full"
          >
            Upload New photo
          </label>
        </div>
        <div className="relative mt-14">
          <div className="absolute -top-12 right-px">
            <ButtonIcon icon={faEdit} circle onClick={handleEditProfile} />
          </div>
          <div className="flex flex-wrap gap-8 justify-between">
            <div className="basis-form">
              <Input
                htmlFor="fullName"
                label="Full Name"
                value={user?.userName}
                onChange={handleUserChange('userName')}
                disabled={isDisabled}
                message={errorMessage?.name}
              />
            </div>
            <div className="basis-form">
              <Input
                htmlFor="email"
                label="College Email ID"
                value={user?.email}
                onChange={handleUserChange('email')}
                disabled={isDisabled}
                message={errorMessage?.email}
              />
            </div>
            <div className="basis-form">
              <Input
                htmlFor="id-code"
                label="id code"
                value={idCode}
                disabled
              />
            </div>
            <div className="basis-form">
              <Input
                htmlFor="phoneNumber"
                label="Phone Number"
                value={profile?.phone}
                onChange={handleProfileChange('phone')}
                disabled={isDisabled}
              />
            </div>
            <div className="w-full block">
              <label className="font-bold block mb-2" htmlFor="bio">
                Bio:
              </label>
              <textarea
                className="p-3 resize-none border border-solid border-silver rounded-md outline-none w-full"
                id="bio"
                rows={6}
                value={profile?.bio}
                onChange={handleProfileChange('bio')}
                disabled={isDisabled}
              />
            </div>
          </div>
          <div className="mt-9">
            <Button
              name="Update Profile"
              type={TYPE.PRIMARY}
              size={SIZE.MEDIUM}
              onClick={handleSubmit}
              isDisabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
