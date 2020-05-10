import React from 'react'
import Header from '../components/header/Header'
import Menu from '../components/menubar/Menu';
import Footer from '../components/footer/Footer'
import ContactForm from '../components/contactContent/contactForm'
import logo from './logo.png';

class Contact extends React.Component {
  render() {
    let links = [
      { label: 'Home', link: '/home' },
      { label: 'About', link: '/about' },
      { label: 'Share', link: '/add-book' },
      { label: 'Choose', link: '/choose-book' },
      { label: 'Contact Us', link: '/contact', active: true },
    ];

    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header />
        <div className="menu_bar">
          <Menu links={links} logo={logo} />
        </div>
        <ContactForm />
        <hr></hr>
        <Footer />
      </div>
    );
  }
}

export default Contact