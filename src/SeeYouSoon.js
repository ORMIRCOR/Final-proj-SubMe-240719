import React from 'react';
import { Image } from 'semantic-ui-react';
import logo from './subletPic/seeYouSoon.jpg';

    function SeeYouSoon() {
      //  debugger;
        localStorage.clear();
     //   var checklocalstorage = localStorage.getItem('UserLoggedIn');
    //  <Image src={src1} size='medium' centered />
          // return <Image src={logo} fluid centered />;
         

          return    <Image src={logo}  size='large' centered />;

          
    }
      
export default SeeYouSoon;