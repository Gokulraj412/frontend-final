import {
    loginRequest,
    loginFail,
    loginSuccess,
    clearError,
    registerSuccess,
    registerFail,
    registerRequest
} from '../Slice/authSlice'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {

    try {
        dispatch(loginRequest())
        const data = await axios.post(`http://localhost:8000/api/v1/admin/login`, { email, password });
        console.log(data);
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    }


}

export const clearAuthError = dispatch => {
    dispatch(clearError())
}

export const register = (userData) => async (dispatch) => {

    try {
        dispatch(registerRequest())


        const { data } = await axios.post(`http://127.0.0.1:8000/api/v1/admin/register`, userData);
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerFail(error.response.data.message))
    }

}
