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
import SubmitButton from './SubmitButton';

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

        {/* New Submit Button Added */}
        <div style={{ marginTop: '20px' }}>
          <SubmitButton />
        </div>
      </div>
    );
  }
}
export default App;
