import React, { useState } from 'react';
import './App.css'; // Import local styles

// Desktop Icon Component
const DesktopIcon = ({ name, icon, onClick }) => (
    <div className="desktop-icon" onClick={onClick}>
        <img src={icon} alt={name} />
        <span>{name}</span>
    </div>
);

// Window Component
const Window = ({ title, onClose }) => (
    <div className="window">
        <div className="window-header">
            <span>{title}</span>
            <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="window-content">
            <p>{`${title} content goes here...`}</p>
        </div>
    </div>
);

// Main Application Component
const App = () => {
    const [windows, setWindows] = useState([]);

    const openWindow = (appName) => {
        if (!windows.includes(appName)) {
            setWindows([...windows, appName]);
        }
    };

    const closeWindow = (appName) => {
        setWindows(windows.filter(window => window !== appName));
    };

    return (
        <div className="app">
            <div className="desktop">
                {/* Desktop Icons */}
                <DesktopIcon 
                    name="Browser" 
                    icon="https://img.icons8.com/ios-filled/50/ffffff/google-chrome.png" 
                    onClick={() => openWindow('Browser')} 
                />
                <DesktopIcon 
                    name="Files" 
                    icon="https://img.icons8.com/ios-filled/50/ffffff/folder.png" 
                    onClick={() => openWindow('Files')} 
                />
                <DesktopIcon 
                    name="Settings" 
                    icon="https://img.icons8.com/ios-filled/50/ffffff/settings.png" 
                    onClick={() => openWindow('Settings')} 
                />
                <DesktopIcon 
                    name="Calculator" 
                    icon="https://img.icons8.com/ios-filled/50/ffffff/calculator.png" 
                    onClick={() => openWindow('Calculator')} 
                />
            </div>
            {/* Taskbar */}
            <div className="taskbar">
                <div className="start">Start</div>
            </div>
            {/* Open Windows */}
            {windows.map((window) => (
                <Window key={window} title={window} onClose={() => closeWindow(window)} />
            ))}
        </div>
    );
};

export default App;
