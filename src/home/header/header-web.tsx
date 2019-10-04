import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

import { HomeItem, homeItems } from '../home.db';

const useStyles = makeStyles((theme) =>
    createStyles({
        anchorItem: {
            paddingLeft: 32,
            paddingRight: 32,
            cursor: 'pointer',
        },
        anchorLink: {
            paddingTop: 8,
            paddingBottom: 8,
            '&:hover': {
                color: theme.palette.secondary.main,
            },
        },
        anchorLinkActive: {
            color: theme.palette.secondary.main,
        },
    }),
);

const HeaderAnchorButton: React.FC<HomeItem> = (props: HomeItem) => {
    const classes = useStyles();

    return (
        <>
            {
                props.tag && props.name &&
                <Grid className={classes.anchorItem} item>
                    <Link
                        className={classes.anchorLink}
                        activeClass={classes.anchorLinkActive}
                        to={props.tag}
                        spy
                        smooth='easeInOutCubic'
                        duration={500}
                    >
                        {props.name}
                    </Link>
                </Grid>
            }
        </>
    );
};

const HeaderWeb: React.FC = () => {
    return (
        <>
            <Grid container justify='flex-end' alignItems='center'>
                {
                    homeItems.map((homeItem, index) => {
                        return (
                            <HeaderAnchorButton key={index} {...homeItem}/>
                        );
                    })
                }
            </Grid>
        </>
    );
};

export default HeaderWeb;
