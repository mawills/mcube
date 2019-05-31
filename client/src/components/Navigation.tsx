import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface toolbarLink {
    label?: string;
    href?: string;
}

// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/page-layout-examples/blog/Blog.js
const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

function Navigation() {
    const classes = useStyles();

    const toolbarLinks: toolbarLink[] = [
        { label: 'Blog', href: '/blog' },
        { label: 'List', href: '/list' },
        { label: 'Playtest', href: '/playtest' },
        { label: 'Premium', href: '/premium' },
        { label: 'Decks', href: '/decks' },
        { label: 'Analysis', href: '/analysis' },
    ];

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h2"
                        variant="h5"
                        align="center"
                        className={classes.toolbarTitle}
                    >
                        MCUBE
                    </Typography>
                    <Button variant="outlined" size="small">
                        Sign In
                    </Button>
                </Toolbar>
                <Toolbar
                    component="nav"
                    variant="dense"
                    className={classes.toolbarSecondary}
                >
                    {toolbarLinks.map(({ label, href }) => (
                        <Link
                            color="textPrimary"
                            noWrap
                            key={label}
                            href={href}
                            className={classes.toolbarLink}
                        >
                            {label}
                        </Link>
                    ))}
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navigation;
