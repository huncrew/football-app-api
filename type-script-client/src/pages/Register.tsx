import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

import { ChangeEvent } from 'react';
import { FocusEvent } from 'react';


import { RootState } from '../store';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { FormEvent } from 'react';
import { KeyboardEvent } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  phoneNumber: '',
  isMember: true,
};

interface Selects {
  name: boolean;
  email: boolean;
  password: boolean;
  phoneNumber: boolean;
  [key: string]: boolean;
}

function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store: RootState) => store.user);
  const [selects, setSelects] = useState<Selects>({
    name: false,
    email: false,
    password: false,
    phoneNumber: false,
  })

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const title = e.target.name == 'Telephone Number' ? 'phoneNumber' : e.target.name
    const value = !selects[title]
    if(!values[title as keyof typeof values]){
      setSelects({ ...selects, [title]: value });
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const title = e.target.name == 'Telephone Number' ? 'phoneNumber' : e.target.name
    const value = !selects[title]
    if(!values[title as keyof typeof values]){
      setSelects({ ...selects, [title]: value });
    }
  };

  const dispatch = useDispatch<ThunkDispatch<RootState, null, AnyAction>>();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name == 'Telephone Number' ? 'phoneNumber' : e.target.name
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, phoneNumber, isMember } = values;
    if (!email || !password || !phoneNumber || (!isMember && !name)) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password, phoneNumber: phoneNumber }));
      return;
    }
    dispatch(registerUser({ name, email, password, phoneNumber }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            selected={selects.name}

          />
        )}
        {/* email field */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          selected={selects.email}
        />
        {/* password field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          selected={selects.password}
        />
        {/* phone-number field */}
        <FormRow
          type='tel'
          name='Telephone Number'
          value={values.phoneNumber}
          handleOnKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (!/^[0-9+]+$/.test(event.key) 
            && event.key !== 'Backspace' 
            && event.key !== 'Enter' 
            && event.key !== 'Tab' 
            && event.key !== 'Delete'
            && event.key !== 'ArrowLeft'
            && event.key !== 'ArrowRight' ) {
              event.preventDefault();
            }
          }}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          selected={selects.phoneNumber}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'loading...' : 'submit'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
