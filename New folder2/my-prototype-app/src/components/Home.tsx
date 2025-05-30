import React from 'react';
import './assets/styles.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to My Prototype App</h1>
            </header>
            <main className="home-main">
                <p>This is a quick prototype of the application.</p>
                <button className="home-button">Get Started</button>
            </main>
            <footer className="home-footer">
                <p>&copy; 2023 My Prototype App</p>
            </footer>
        </div>
    );
};
<div id="test"></div>
export default Home;