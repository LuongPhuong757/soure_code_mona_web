import * as constants from '../constants'
const DEFAULT_STATE = {
    error: false,
    messageError: '',
    isLoading: false
}

function LoginReducers(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case constants.LOGIN_REQUEST:
        case constants.REGESTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case constants.LOGIN_SUCCESS:
        case constants.REGESTER_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case constants.LOGIN_FAILURE:
        case constants.REGESTER_FAILURE:
            return {
                ...state,
                error: true,
                messageError: action.payload.message
            }
        default:
            return {
                ...state
            }
    }
}

export default LoginReducers