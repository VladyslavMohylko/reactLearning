import React from "react";
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer className="section footer-classic contex-dark bg-image" 
            style={{ color: "#fff", padding: "10px" }}>
                <p>
                    Copyright
                </p>
            </footer>
        )
    }
}

export default Footer;