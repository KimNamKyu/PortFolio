import React from 'react';
import { Container, Typography, CssBaseline, ButtonGroup, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import About from './About';
import Profile from './Profile';
const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    btn:{
        margin: '0 10px',
        padding: '7px 15px 6px',
        border: '1px solid #EEE',
        borderradius: '25px'
    }
}));

function Content() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <About/>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center">
                            content
                        </Typography>
                        <div style={{textAlign:'center', paddingTop:'50px'}}>
                            <Button variant="contained" className={classes.btn}>Profile</Button>
                            <Button className={classes.btn}>Skill</Button>
                            <Button className={classes.btn}>Project</Button>
                        </div>
                        <Profile/>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Content;