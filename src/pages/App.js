import React, { Component } from 'react';
import Header from '../components/header/Header'
import Menu from '../components/menubar/Menu';
import Content from '../components/maincontainer/Content'
import Footer from '../components/footer/Footer'
import logo from './logo.png';

class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '/home', active: true },
      { label: 'About', link: '/about' },
      { label: 'Share', link: '/add-book' },
      { label: 'Choose', link: '/choose-book' },
      { label: 'Contact Us', link: '/contact' },
    ];

    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <Header />
        <div className="menu_bar">
          <Menu links={links} logo={logo} />
        </div>
        <Content />
        <hr/>
        <Footer />
      </div>
    );
  }
}

export default App;
