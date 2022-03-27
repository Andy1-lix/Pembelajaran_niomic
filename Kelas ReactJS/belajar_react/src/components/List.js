import React, { Component } from 'react';
import Image from './Image';

class List extends Component {
    render() {
        return (
           <ol>
               <Image linkgambar=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/>
               <li>Nasi Padang</li>
               <Image linkgambar=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
               <li>Sate Padang</li>
               <Image linkgambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
               <li>Coto Makasasr</li>
               <Image linkgambar=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>

           </ol>
        );
    }
}

export default List;