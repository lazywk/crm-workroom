import { combineReducers } from 'redux'
import auth from './auth'

const rootReducer = (asyncReducers?: any) => (state: any, action: any) => {
    const combinedReducer = combineReducers({
        auth,

        ...asyncReducers,
    });
    return combinedReducer(state, action);
};

export default rootReducer;
