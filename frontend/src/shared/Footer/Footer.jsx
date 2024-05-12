import React from 'react'
import "./footer.scss"

export default function Footer() {
    return (
        <div id='footer-component'>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about mr-5">
                        <h2>About Us</h2>
                        <p>Elevate your experience with the latest Xbox consoles. Unleash the power of play, only a click away.</p>
                    </div>
                    {/* <div className="footer-section contact">
                        <h2>Contact Us</h2>
                        <p>Email: info@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div> */}
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 Xbox. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
