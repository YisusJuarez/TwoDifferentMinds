
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      backgroundColor: "#424242 ",
      color: "white"
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
      
    }
  }));

const sections = [
    'iOS',
    'Android',
    'MacOS',
    'Windows',
    'Diario',
    'Opinión',
    'Ciencia',
    'IA',
    
  ];

  export default function Navcontent() {
    const classes = useStyles();
    return (
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section}
            variant="body2"
            href="#"
            className={classes.toolbarLink}
          >
            {section}
          </Link>
        ))}
      </Toolbar>
    )
  }  