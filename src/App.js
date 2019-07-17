import React,{Component} from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import {Provider} from  'react-redux';  
import Todo from './todo.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import {save,load} from 'redux-localstorage-simple';
import TabView from'./TabView.js';

const store=createStore(rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(save())),)

class App extends Component {
   
  inputElement=React.createRef();

  render(){
     return (
      <Provider store={store}>
    <div className="App">
 
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <Todo/>
      <TabView/> 
      </div> 
     
 </Provider>
  );
}
}
export default App;
