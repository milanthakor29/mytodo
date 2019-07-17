    import { combineReducers } from 'redux'; 
    import reducer from './reducers.js'
  const rootReducer=combineReducers({
     todo:reducer,
 })

 export default rootReducer;
