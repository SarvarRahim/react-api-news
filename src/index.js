import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { usePromiseTracker } from "react-promise-tracker";

 const LoadingIndicator = props => {
     const { promiseInProgress } = usePromiseTracker();

     return (
       promiseInProgress &&
      <h1>LOADING...</h1>

    );
   }
   

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoadingIndicator/>
  </React.StrictMode>,
  document.getElementById('root')
);
