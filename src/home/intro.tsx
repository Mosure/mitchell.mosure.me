import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import { makeStyles, createStyles, Grid } from '@material-ui/core';

import { LogoAnimated } from '../shared';

const useStyles = makeStyles(() =>
    createStyles({
        ssrInit: {
            display: 'none',
        },
        container: {
            height: '100vh',
            width: '100vw',
        },
        logo: {
            maxWidth: '300px',
        },
    }),
);

const Zoom = posed.div({
    load: {
        applyAtStart: { display: 'block' },
        scale: 1,
        transition: {
            ease: 'easeIn',
            duration: 300,
        },
    },
    init: {
        scale: 0,
        transition: {
            ease: 'easeOut',
            duration: 300,
        },
        applyAtEnd: { display: 'none' },
    },
});

const Intro: React.FC = () => {
    const classes = useStyles();

    const [loaded, setState] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setState(true), 200);

        const timer2 = setTimeout(() => setState(false), 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <Zoom className={classes.ssrInit} pose={loaded ? 'load' : 'init'}>
            <Grid className={classes.container} container justify='center' alignItems='center'>
                <Grid item>
                    <LogoAnimated className={classes.logo}/>
                </Grid>
            </Grid>
        </Zoom>
    );
};

export default Intro;
