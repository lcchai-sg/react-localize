import React from 'react';
import { Route } from 'react-router-dom';

// import context
import { MyContext } from '../context';

// import pages
import Home from './pages/Home';
import Portfolio from './pages/Protfolio';
import About from './pages/About';

// import components
import Header from './components/Header';

// component implementation
const Main = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          <Header context={context} />
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
        </React.Fragment>
      )}
    </MyContext.Consumer>
  )
}

export default Main
