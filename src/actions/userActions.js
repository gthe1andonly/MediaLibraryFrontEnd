import Axios from 'axios';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants';

// will hold login, logout and register actions

const login = ({email, password}) => async(dispatch) => {}

const register = ({name, email, password, repassword}) => async(dispatch) => {}

const logout = () => async(dispatch) => {}