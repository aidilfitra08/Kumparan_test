import { combineReducers } from 'redux'
import users from './users'
import post from './post'
import comment from './comment'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users,
    post,
    comment,
    form: formReducer
})