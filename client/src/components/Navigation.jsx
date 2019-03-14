import React from 'react';
import '../styles/Navigation.css';

const NavigationTab = tab => {
    const { id, label, link, selected } = tab;

    if (selected) {
        return (
            <div className={`selected navigation-tab navigation-tab-${id}`}>
                <a href={link}>{label}</a>
            </div>
        );
    }

    return (
        <div className={`navigation-tab navigation-tab-${id}`}>
            <a href={link}>{label}</a>
        </div>
    );
};

const Navigation = ({ tabs }) => {
    return (
        <div className="navigation">
            <div className="navigation-left">
                <a href="/">
                    <img src="../img/logo.svg" alt="logo" role="presentation" />
                </a>
                {tabs.map(tab => (
                    <NavigationTab {...tab} key={tab.id} />
                ))}
            </div>
            <div className="navigation-right">
                <a href="/" className="navigation-home-button">
                    <img src="../img/home.svg" alt="home" role="presentation" />
                </a>
                <div className={`navigation-tab navigation-cube-menu`}>
                    <a href="#">My Cubes Dropdown</a>
                </div>
                <div className={`navigation-tab navigation-sign-in`}>
                    <a href="#">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
