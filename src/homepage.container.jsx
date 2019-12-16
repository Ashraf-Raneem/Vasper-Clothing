import React from 'react'; 
import "./homepage.styles.scss";

const HomePage = () => (
    <div className="homePage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="header">Hats</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="header">Jackets</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="header">Women</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="header">Sneaker</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="header">Mens</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
)
export default HomePage; 