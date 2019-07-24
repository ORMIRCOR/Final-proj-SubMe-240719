import { GoogleComponent } from 'react-google-location' 
import React, { Component } from 'react';
const API_KEY = "AIzaSyDv54o8dvZbSo3fMkBdwZm_NTJKQSJcdnc"

class CheckAuotoComplete extends Component {
    constructor(props) {
        super(props)
        this.state = {
          place: null,
          coordinates: "",
        };
      }

      onChange = e => {
          debugger;
          this.setState(() => ({
            place: e,
          }));
 
      }

      sendMail = () =>
      {
        debugger;
        // var sendMail = require('send-mail')
        // sendMail({
        //   host: "smtp.example.com",
        //   port: 25,
        //   username: "reactsubme@gmail.com",
        //   password : "Aa234567",
        //   from: "luobotang <reactsubme@gmail.com>",
        //    to : "luobotang1 <reactsubme@gmail.com>",
        //   subject: "Hello",
        //   body: "Hello!"
        // })
           
      }
     
      render() {
          debugger;
          this.sendMail();
        return (
          
          <div >
            please write the full adress
              <GoogleComponent
              apiKey={API_KEY}
              language={'en'}
              country={'country:isr'}
              coordinates={true}
            //  locationBoxStyle={'custom-style'}
            //  locationListStyle={'custom-style-list'}
              onChange={e => { this.onChange(e) }}
                                />
          </div>
     
        )
      } 
    }
 
export default CheckAuotoComplete;