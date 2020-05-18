import React from 'react';
import Header from '../components/header/Header'
import Menu from '../components/menubar/Menu';
import Footer from '../components/footer/Footer'
import AboutContent from '../components/aboutContent/aboutConent'
import MapContainer from '../components/googleMaps/googleMap'
import logo from './logo.png';

class About extends React.Component {
  render() {
    let links = [
      { label: 'Home', link: '/home' },
      { label: 'About', link: '/about', active: true },
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
        <hr/>
        <AboutContent />
        <hr/>
        <MapContainer/>
        <Footer />
      </div>
    );
  }
}
export default About