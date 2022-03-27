import './App.css';
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuKontak from './Page/MenuKontak';
import MenuProduct from './Page/MenuProduct';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuUtama from './Page/MenuUtama';


class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <MenuKontak/>
        <MenuProduct/>
        <MenuTentangKami/>
        <MenuUtama/>
        <Footer/>
      </div>
    );
  }
}



export default App;
