import Axios from 'axios';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants';
import Cookie from 'js-cookie';

// will hold login, logout and register actions

const login = ({email, password}) => async(dispatch) => {
    dispatch({type: USER_LOGIN_REQUEST, payload:{email, password}});
    try {
        const { data } = await Axios.post("http://localhost:8080/login", {email, password});
        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    } catch(error) {
        dispatch({type: USER_LOGIN_FAIL, payload: error.message });
    }
}

const register = ({userName, email, password, repassword}) => async(dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { userName, email, password, repassword } });
  try {
    const { data } = await Axios.post("http://localhost:8080/register", { userName, email, password, repassword });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

const logout = () => async(dispatch) => {
    Cookie.remove("userInfo");
    dispatch({type: USER_LOGOUT});
}

export {login, register, logout}