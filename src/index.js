import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Title from 'components/title';
import Navigation from 'components/navigation';
import Home from 'components/home';
import About from 'components/about';
import Gallery from 'components/gallery';
import Order from 'components/order';
import Contact from 'components/contact';
import Footer from 'components/footer';

import 'app.css';

ReactDOM.render(
  <Router>
    <div>
      <Title />
      <Navigation>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/contact" component={Contact} />
      </Navigation>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root'),
);
