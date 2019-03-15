import * as React from 'react';
import { TabStructure } from '../common/types';
import '../styles/Navigation.css';

const NavigationTab: React.FunctionComponent<TabStructure> = ({
    id,
    label,
    link,
    selected,
}: TabStructure) => {
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

const Navigation = () => {
    const navigationTabs: TabStructure[] = [
        { label: 'Blog', link: '/blog', id: 1, selected: true },
        { label: 'List', link: '/list', id: 2 },
        { label: 'Playtest', link: '/playtest', id: 3 },
        { label: 'Premium', link: '/premium', id: 4 },
        { label: 'Decks', link: '/decks', id: 5 },
        { label: 'Analysis', link: '/analysis', id: 6 },
    ];

    return (
        <div className="navigation">
            <div className="navigation-left">
                <a href="/">
                    <img src="../img/logo.svg" alt="logo" role="presentation" />
                </a>
                {navigationTabs.map(tab => (
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
