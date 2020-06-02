import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-distributed">

                    <div className="footer-left">
                        <h3>Book<span>Crossing</span></h3>
                        <p className="footer-company-name">WEB-UCU © 2020</p>
                    </div>


                    <div className="footer-center">
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>Kozel'nytska street, 2a</span> Lviv, Ukraine</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="https://ucu.edu.ua/">UCU</a></p>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:gapunovych@ucu.edu.ua">gapunovych@ucu.edu.ua</a></p>
                        </div>
                    </div>


                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>About the company</span>
                            BookCrossing is the act of releasing your books "into the wild" for a stranger to find, or via "controlled release" to another BookCrossing member, and tracking where they go via journal entries from around the world. Join our community!
                            </p>
                    </div>

                </footer>
            </div>
        );
    }
}
export default Footer





