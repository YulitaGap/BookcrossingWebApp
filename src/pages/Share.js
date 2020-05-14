import React, { Component } from 'react';
import Header from '../components/header/Header'
import Menu from '../components/menubar/Menu';
import Footer from '../components/footer/Footer'
import logo from './logo.png';
import Share from '../components/shareContent/shareContent'

class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '/home'},
      { label: 'About', link: '/about' },
      { label: 'Share', link: '/add-book', active: true  },
      { label: 'Choose', link: '/choose-book' },
      { label: 'Contact Us', link: '/contact' },
    ];

    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header />
        <div className="menu_bar">
          <Menu links={links} logo={logo} />
        </div>
        <Share />
        <hr></hr>
        <Footer />
      </div>
    );
  }
}

export default App;