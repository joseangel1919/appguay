import counterReducer from './counter/counterReducer';
import { combineReducers } from 'redux';
import messageReducer from './message/messageReducer';

const rootReducer =combineReducers({
    counterReducer,
    messageReducer
})


export default rootReducer;