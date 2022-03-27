import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List/>
        <Footer name="Makanan Nusantara" tahun="EST 2001"/>
      </div>
    );
  }
}

export default App;