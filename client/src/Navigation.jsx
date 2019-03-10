import React from 'react';
import './styles/Navigation.css';

const NavigationTab = tab => {
    const { id, name, link, selected } = tab;

    if (selected) {
        return (
            <div className={`selected navigation-tab navigation-tab-${id}`}>
                <a href={link} >{name}</a>
            </div>
        )
    }

    return (
        <div className={`navigation-tab navigation-tab-${id}`}>
            <a href={link} >{name}</a>
        </div>
    );
}

const Navigation = ({ tabs }) => {
    return (
        <div className="navigation">
            {tabs.map(tab => (
                <NavigationTab {...tab} key={tab.id} />
            ))}
        </div>
    );
};

export default Navigation;
