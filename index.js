import './style.css'
import { countdown } from './countdown.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1 id="headline">Countdown to my birthday</h1>
    <div id="countdown">
      <ul>
        <li><span id="days"></span>days</li>
        <li><span id="hours"></span>Hours</li>
        <li><span id="minutes"></span>Minutes</li>
        <li><span id="seconds"></span>Seconds</li>
      </ul>
    </div>
    <div id="content" class="emoji">
      <span>🥳</span>
      <span>🎉</span>
      <span>🎂</span>
    </div>
  </div>
`;

countdown();