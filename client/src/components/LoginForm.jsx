import { useForm } from 'react-hook-form';
import './loginform.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Axios from 'axios';
import { loginSuccess, loginFailure } from '../Redux/userSlice';
import { apiDomain } from '../utils/utils';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    Axios.post(`${apiDomain}/auth/login`, data)
      .then(({ data }) => {
        if (data.token) {
          // Save user information in localStorage
          localStorage.setItem('user', JSON.stringify(data));
          
          // Dispatch login success action
          dispatch(loginSuccess(data));
          
          navigate('/todos');
        }
      })
      .catch(({ response }) => {
        dispatch(loginFailure());
        alert(response?.data.error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form">
      <p className="loginBanner">Login Page</p>
      <>
        <input type="text" placeholder="Username" {...register('username')} />
        <p>{errors.username?.message}</p>
      </>
      <>
        <input type="password" placeholder="Password..." {...register('password')} />
        <p>{errors.password?.message}</p>
      </>

      <input className="submitBtn" type="submit" value="Submit" />
    </form>
  );
}
