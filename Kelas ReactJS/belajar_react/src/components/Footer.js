import React from 'react';

const Footer = (props) => {
    return(
        <div style={{textAlign:"center", backgroundColor:"#C0EDA6"}}>
            <h4>Halaman Footer {props.name   } </h4>
            <p>@{props.tahun}</p>
        </div>
    );

}




export default Footer;