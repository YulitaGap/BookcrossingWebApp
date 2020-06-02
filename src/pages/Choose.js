import React from 'react';
import Header from '../components/header/Header'
import Menu from '../components/menubar/Menu';
import Footer from '../components/footer/Footer'
import ChoiceGrid from '../components/chooseContent/choice'
import logo from './logo.png';

class Choice extends React.Component {
  render() {
    let links = [
      { label: 'Home', link: '/home' },
      { label: 'About', link: '/about' },
      { label: 'Share', link: '/add-book' },
      { label: 'Choose', link: '/choose-book', active: true },
      { label: 'Contact Us', link: '/contact' },
    ];
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Header />
        <div className="menu_bar">
          <Menu links={links} logo={logo} />
        </div>
        <ChoiceGrid />
        <Footer />
      </div>
    );
  }
}
export default Choice