import React, { useState, useEffect } from 'react';
import {
    createStyles,
    makeStyles,
} from '@material-ui/core';

import Intro from './intro';
import Header from './header';
import Footer from './footer';
import Landing from './landing';
import { homeItems } from './home.db';
import { DisplayNone } from '../shared';

const useStyles = makeStyles((theme) =>
    createStyles({
        homeSection: {
            paddingTop: '150px',
            paddingBottom: '30%',
        },
        homeContainer: {
            [theme.breakpoints.up('xs')]: {
                padding: '0px 15px',
            },
            [theme.breakpoints.up('sm')]: {
                padding: '0px 50px',
            },
            [theme.breakpoints.up('md')]: {
                padding: '0px 150px',
            },
            [theme.breakpoints.up('lg')]: {
                padding: '0px 250px',
            },
        },
    }),
);

const SuperContainer: React.FC = (props) => {
    const classes = useStyles();

    return (
        <section id='Home' className={classes.homeContainer}>
            {props.children}
        </section>
    );
};

const Home: React.FC = () => {
    const classes = useStyles();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Intro/>
            <DisplayNone pose={loaded ? 'load' : 'init'} staggerChildren={100} beforeChildren>
                <Header/>

                <SuperContainer>
                    <Landing/>
                    {
                        homeItems.map((homeItem, index) => {
                            const Child = homeItem.content;

                            return (
                                <section
                                    id={homeItem.name || ''}
                                    key={index}
                                    className={classes.homeSection}
                                >
                                    <Child {...homeItem}/>
                                </section>
                            );
                        })
                    }
                </SuperContainer>

                <Footer/>
            </DisplayNone>
        </>
    );
};

export default Home;
