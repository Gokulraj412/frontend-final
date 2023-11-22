import {
    loginRequest,
    loginFail,
    loginSuccess,
    clearError,
    registerSuccess,
    registerFail,
    registerRequest,
    logoutSuccess,
    logoutFail
} from '../Slice/authSlice'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {

    try {
        dispatch(loginRequest())
        const data = await axios.post(`${process.env.REACT_APP_URL}/api/v1/admin/login`, { email, password });
        console.log(data);
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    console.log(error.response.data.message);
    }

}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}

export const register = (userData) => async (dispatch) => {

    try {
        dispatch(registerRequest())


        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/v1/admin/register`, userData);
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }

}


export const logout =  async (dispatch) => {

    try {
        await axios.get(`http://127.0.0.1:8000/api/v1/admin/logout`);
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFail(error))
    }

}
