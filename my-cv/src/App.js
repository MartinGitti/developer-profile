// Required Imports:

import React from 'react'; // Import React library.
import './App.css'; // Import Styling sheet.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import React-bootstrap components.
import Menu from './Components/Menu'; // Import Created Component.

// Import all Images.
import profilePic from './Images/profilePic.jpg'; // Import Profile Image.
import htmlLogo from './Images/html.png';
import javascriptLogo from './Images/javascript.png';
import cssLogo from './Images/css.png';
import jqueryLogo from './Images/jquery.png';
import bootstrapLogo from './Images/bootstrap.png';
import nodeLogo from './Images/node.png';
import emailIcon from './Images/email.png';
import githubIcon from './Images/github.png';
import studyLogo from './Images/studies.jfif';
import babelLogo from './Images/babel.png';
import gitLogo from './Images/git.png';
import sublimeLogo from './Images/sublime.png';
import visualSCodeLogo from './Images/visualStudioCode.png';


/* Function to display all content on browser. */
function App() {
  return (
    <div className="App">
      <div className="App-navbar">
        <Menu /> {/* Menu 'Navbar' Component */}
      </div>
      <header className="App-header">
        <img src={profilePic} className="App-logo" alt="Profile Pic" /> {/* Profile Image */}
        <h1>
          Welcome to my Profile!
        </h1>
        <p>Martin Reed</p>
        <div className="Contact-div">
          <img src={emailIcon} id="Email-icon" alt="Email Icon" />
          <a href="mailto: martinreedsafari@gmail.com">martinreedsafari@gmail.com</a> {/* Contact me */}
        </div>
        <p>Entry-level Fullstack Web Developer</p>
      </header>
      <hr />
      <div id="Connect-div">
        <h2>Developer Projects:</h2>
        <p id="github">Click on the Github logo below in order to view my projects on my Github profile.</p> {/* Link to Github Profile */}
        <div id="arrows">
          <span>&#8595;&#8595;&#8595;</span>
        </div>
        <br/>
        <a href="https://github.com/MartinGitti/OnlineStore.git">
          <img src={githubIcon} alt="GitHub Icon" id="Github-icon" />
          <p>CLICK ME!</p>
        </a>
      </div>
      <hr />
      <div className="App-body">
        <div id="AboutMe-div">
          <h2>About Me:</h2>
          <h5>I'm all about motto's and inspirational quote's!</h5>
          <p className="quotes">I'm a firm believer in the saying: "Life is what you make of it!"- Preeti Shenoy</p>
          <p>
          My years of expertise lie mostly within the animal industry but on numerous occasions I'd get called aside to assist with IT related matters.
          working with computers has always been a great hobby of mine until recently, I decided to take my interrest further to develope my hobby into a professional career
          which I believe holds excellent oppurtunities instore.
          </p>
          <p>
          I've thoroughly enjoyed every minute spending time with remarkable animals and people. Working in a team environment as well as on my own has really contributed greatly towards growth within myself as well
          and my career.
          
        
          Anminal welfare and training has had its many challenges and I firmly believe that those situations have prepared me to broaden my skill set.
          I might not have all the practical experience in the field as a web developer but I look forward to the opportunities that the coding industry has to offer, knowing that I will be a great asset wherever I go.
          
          
          I am a hard-working, motivated, punctual individual with a lot of enthusiasm and a passion for giving my best at everything life throws at me!
          
        
          The time has come for me to do a career change and I trust that something promising lies ahead.
          </p>
        
          <p className="quotes">I stand by my motto: "Die with memories, not dreams"- Kamesh Shanmugam</p>
        </div>
        <hr />
        <div id="Education-div">
          <h2>Education:</h2>
          <img src={studyLogo} alt="Hyperion Development Logo" />
          <p>Hyperion Development: Online 6 Month Course <br />
              Completed Course in 2020
          </p>
        </div>
        <hr />
        <div id="App-logos">
          <h2> Skills:</h2>
          <img src={htmlLogo} className="skills-logo" alt="Html logo" />
          <img src={javascriptLogo} className="skills-logo" alt="Javascript logo" />
          <img src={cssLogo} className="skills-logo" alt="Css logo" />
          <br />
          <img src={jqueryLogo} className="skills-logo" alt="Jquery logo" />
          <img src={bootstrapLogo} className="skills-logo" alt="Bootsrap logo" />
          <img src={nodeLogo} className="skills-logo" alt="Node.js logo" />
          <br />
          <img src={babelLogo} className="skills-logo" alt="Babel logo" />
          <img src={gitLogo} className="skills-logo" alt="Git logo" />
          <img src={githubIcon} className="skills-logo" alt="Github logo" />
          <br />
          <img src={sublimeLogo} className="skills-logo" alt="Sublime text logo" />
          <img src={visualSCodeLogo} className="skills-logo" alt="Visual Studio Code logo" />
        </div>
      </div>
    </div>
  );
}

export default App;

///////////////////////////////////////////////////////////////////////////THE END///////////////////////////////////////////////////////////////////////////////////////