import {combineReducers} from 'redux';
import highlightsReducer from './highlights';

const rootReducer = combineReducers({
  highlights: highlightsReducer,
});

export default rootReducer;
