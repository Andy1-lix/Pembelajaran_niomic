import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div>
                <img 
                src={this.props.linkgambar} alt='gambar-makanan' width='300'height='200' style={{borderStyle:"inset", color:"black"}}></img>
            </div>
        );
    }
}

export default Image;