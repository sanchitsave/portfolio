Here is your updated app.js with a new button added. For demonstration, I've added the button inside the main <div className='App'>, below the imported components. You can edit its position or functionality as needed.

```javascript
/* eslint-disable */
import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import resumeData from './components/resumeData'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        {/* <Testimonials resumeData={resumeData}/> */}
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>

        {/* New Button Added */}
        <button
          onClick={() => alert('New button clicked!')}
          style={{marginTop: '20px'}}
        >
          New Button
        </button>
      </div>
    );
  }
}
export default App;
```

Let me know if you want the button to do something specific or be placed elsewhere!