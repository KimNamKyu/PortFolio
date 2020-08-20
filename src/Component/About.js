import React from 'react';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    }
}));

function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center">
                            ABOUT
                        </Typography>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
}

export default About;