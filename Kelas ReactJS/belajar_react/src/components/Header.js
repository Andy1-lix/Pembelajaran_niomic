import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            daftar : "daftar Makanana Nusantara"
        };
    }
        render(){
        return (
            <div>
                <h1 style={{textAlign:"center", backgroundColor: "#D9CAB3", paddingTop:"50px"}}>Makanan Khas Makassar {this.state.daftar}</h1>
              <p>{this.state.daftar}</p>
            </div>
        );
    }
}

export default Header;