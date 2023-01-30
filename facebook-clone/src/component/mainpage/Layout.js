import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import LeftSide from './leftsidepanel/LeftSide';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="mainpage_container">
                <Grid container >
                    <Grid item xs={3}>
                        <LeftSide />
                    </Grid>
                    <Grid item xs={6}>
                        middle
                    </Grid>
                    <Grid item xs={3}>
                        right
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Layout;