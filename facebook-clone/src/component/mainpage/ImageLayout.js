import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./MainPage.css";

class ImageLayout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="imageLayout_container">
                <div className="imageLayout_imglay">
                    <Avatar className="imageLayout_img" src="https://scontent-pnq1-1.xx.fbcdn.net/v/t31.18172-1/16299632_1265392430180578_8956618037203765660_o.jpg?stp=dst-jpg_p148x148&_nc_cat=104&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=XyjfLOpDoyEAX9m-w0P&_nc_ht=scontent-pnq1-1.xx&oh=00_AfBIiha7dPNx7kAlbsLEZ7WP_6ricoYOi6g6huiLOT4NHA&oe=63FF53DF" />
                </div>
                <div className="imageLayout_text">
                    Zakir
                </div>
            </div>
         );
    }
}
 
export default ImageLayout;