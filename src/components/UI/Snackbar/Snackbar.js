import React from 'react';

import { Snackbar, IconButton, Button, Icon } from '@material-ui/core';
import { Close, CheckCircle, Warning, Error } from '@material-ui/icons';

const snackbar = props => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={props.open}
    autoHideDuration={6000}
    onClose={props.closed}
    ContentProps={{
      'aria-describedby': 'message-id',
      'style': {
        background: props.success ? 'linear-gradient(45deg, #212121 33.333%, #33691e 100%)' : 
          props.warning ? 'linear-gradient(45deg, #212121 33.333%, #ffea00 100%)' : 
          props.error ? 'linear-gradient(45deg, #212121 33.333%, #d50000 100%)' :
          '#212121'
      }
    }}
    message={
      <span id="message-id" style={{
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "'Dosis', sans-serif",
        fontWeight: 500,
        fontSize: 16
      }}>
        <Icon style={{ 
          marginRight: '.5rem',
          color: props.success ? '#689f38' :
            props.warning ? '#ffff00' :
            props.error ? '#c62828' :
            '#fff'
        }}>
          { props.success ? <CheckCircle /> : null }
          { props.warning ? <Warning /> : null }
          { props.error ? <Error /> : null }
        </Icon>
        { props.message }
      </span>
    }
    action={[
      <Button 
        key="dismiss"
        color="inherit"
        size="small"
        onClick={props.closed}>
        Dismiss
      </Button>,
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={props.closed} >
        <Close />
      </IconButton>,
    ]} >
  </Snackbar>
);

export default snackbar;