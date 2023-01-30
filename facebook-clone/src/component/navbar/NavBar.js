import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@material-ui/core/Grid';
import fblogo from '../../images/logo.png';
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";
import { Avatar } from '@material-ui/core';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div>
                <Grid container className="navbar_main">
                    <Grid item xs = {3}>
                        <div className="navbar_leftbar">
                            <img className = "navbar_logo" src = {fblogo} width="40px"/>
                            <input className="navbar_search" type="text" placeholder='Search Facebook'/>
                        </div>
                    </Grid>
                    <Grid item xs = {6}>
                        <div className="navbar_container">
                            <div className="navbar_tabs active">
                                <img src={home} height="35px" width="35px" />
                            </div>
                            <div className="navbar_tabs">
                                <img src={page} height="35px" width="35px" />
                            </div>
                            <div className="navbar_tabs">
                                <img src={watch} height="35px" width="35px" />
                            </div>
                            <div className="navbar_tabs">
                                <img src={market} height="35px" width="35px" />
                            </div>
                            <div className="navbar_tabs">
                                <img src={group} height="35px" width="35px" />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs = {3}>
                        <div className='navbar_rightbar'>
                            <div classname="navbar_righttab">
                                <Avatar className="navbar_rightimg" src=""/>
                                <div className='navbar_profilename'>Zakir</div>
                            </div>

                        </div>
                    </Grid>
                        
                </Grid>
            </div>
        );
    }
}
 
export default NavBar;