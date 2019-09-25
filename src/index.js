import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import context provider
import { MyProvider } from './context';

// import css
import './app/styles/base.css';
import './app/styles/layout.css';

// import Main component
import Main from './app/Main';

// create App component
const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </MyProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
