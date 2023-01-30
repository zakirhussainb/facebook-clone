import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import "./LeftSide.css";

class LeftSide extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <ImageLayout />
                <ImageLayout />
                <ImageLayout />
                <ImageLayout />
                <ImageLayout />
                <ImageLayout />
            </div>
         );
    }
}
 
export default LeftSide;