import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <LinkTab label="Blog" href="/blog" />
                    <LinkTab label="List" href="/list" />
                    <LinkTab label="Playtest" href="/playtest" />
                    <LinkTab label="Premium" href="/premium" />
                    <LinkTab label="Decks" href="/decks" />
                    <LinkTab label="Analysis" href="/analysis" />
                </Tabs>
            </AppBar>
        </div>
    );
}

export default Navigation;
