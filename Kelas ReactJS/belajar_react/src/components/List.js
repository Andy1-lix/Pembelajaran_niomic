import React, { Component } from 'react';
import Image from './Image';

class List extends Component {
    render() {
        return (
           <ol>
               <Image/>
               <li>Nasi Padang</li>
               <li>Sate Padang</li>
               <li>Coto Makasasr</li>
           </ol>
        );
    }
}

export default List;