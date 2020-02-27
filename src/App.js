import React, { Component } from 'react'
import Goodbye from './google-logo.png'
import call from './call.png'
import facebook from './facebook.png'
import gmail from './gmail.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import { useState } from 'react';

export default function App() {

  
    const [showText, setShowText] = useState(false);
    
    return (
      <div className="container">
        <img src={Goodbye} alt="" className="goguImg" />
        <div className="poemNormal">
          <p>
            It's been two years of OWNZONES fun and now it's time for me to run;<br/>
            I'm moving out to Switzerland, thus my OWNZONES time will end.
          </p>
          <p>
            I've learned so much over these years, when hard at work or drinking beers,<br/>
            You've made me feel as if at home - with friends around, never alone.
          </p>
          <p>
            I may be done with working here, but I for sure won't disappear;<br/>
            I'll be out on my special quest and wish you luck and all the best.
          </p>
          <p>
            I wish you growth in work and play, I wish you're happy every day,<br/>
            Love you all, I hope you know. Find my contacts down below.
          </p>
        </div>
        <div className="poemSmall">
          <p>
            It's been two years of OWNZONES fun<br/>
            And now it's time for me to run;<br/>
            I'm moving out to Switzerland,<br/>
            Thus my OWNZONES time will end.
          </p>
          <p>
            I've learned so much over these years,<br/>
            When hard at work or drinking beers,<br/>
            You've made me feel as if at home -<br/>
            With friends around, never alone.
          </p>
          <p>
            I may be done with working here,<br/>
            But I for sure won't disappear;<br/>
            I'll be out on my special quest<br/>
            And wish you luck and all the best.
          </p>
          <p>
            I wish you growth in work and play,<br/>
            I wish you're happy every day,<br/>
            Love you all, I hope you know --<br/>
            Find my contacts down below.
          </p>
        </div>
        <div className="logout">
          <h2 className="logouth2">Get in touch</h2>
          <p className="logoutp">Do you want to get in touch?</p>
          <div className="buttons">
            <p className="logoutcancel" onClick={() => setShowText(!showText)}>CANCEL</p>
            <button className="logoutyes" onClick={() => setShowText(!showText)}>YES</button>
          </div>
        </div>
        
          {showText && 
          <table>
            <tr>
              <td><img src={gmail} className="contactImg" /></td>
              <td>
                <p className="contactText">
                  <a href="mailto:ilie06@gmail.com">
                    ilie06@gmail.com
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td><img src={call} className="contactImg" /></td>
              <td>
                <p className="contactText">
                  <a href="tel:0040745522704">
                    +40 745 522 704
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td><img src={facebook} className="contactImg" /></td>
              <td>
                <p className="contactText">
                  <a href="www.facebook.com/nosthrillz">
                    nosthrillz
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td><img src={linkedin} className="contactImg" /></td>
              <td>
                <p className="contactText">
                  <a href="https://www.linkedin.com/in/ilie-bogdan-mihai">
                    ilie-bogdan-mihai
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <td> <img src={instagram} className="contactImg" /></td>
              <td>
                <p className="contactText">
                  <a href="https://www.instagram.com/nosthrillz">
                    nosthrillz
                  </a>
                </p>
              </td>
            </tr>
          </table>
          }
        
        <p className="foot">Powered by <a href="https://github.com/nosthrillz">NoSThrillZ</a></p>
      </div>
      
    )
  
}

