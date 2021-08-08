/* eslint-disable */
import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'

export default function Portfolio({ authCredentials }) {
    const classes = useStyles()
    const [project1, setProject1] = useState(false)
    const [project1Button, setProject1Button] = useState('Show')
    const [project2, setProject2] = useState(false)
    const [project2Button, setProject2Button] = useState('Show')
    const [project3, setProject3] = useState(false)
    const [project3Button, setProject3Button] = useState('Show')
    const onClickOne = (event) => {
        setProject1(!project1)
        if(project1Button === 'Show')
        setProject1Button('Hide')
        else
        setProject1Button('Show')
      }

      const onClickTwo = (event) => {
        setProject2(!project2)
        if(project2Button === 'Show')
        setProject2Button('Hide')
        else
        setProject2Button('Show')
      }

      const onClickThree = (event) => {
        setProject3(!project3)
        if(project3Button === 'Show')
        setProject3Button('Hide')
        else
        setProject3Button('Show')
      }


    return (
        <section id='portfolio'>
            <div className='row'>
                <div className='twelve columns collapsed'>
                    <h1>Check Out Some of My Works.</h1>
                    <h3>1- Webpages for Hutchison Software</h3> <Button onClick={onClickOne} className={classes.button}>{project1Button}</Button>
                    {project1 && 
                    <div>
                    <div>Here are some screenshots of the pages I worked on</div>
                    <img src='images/portfolio/Hutch1.JPG' className='item-img'/>
                    <div>When you click on the More button:</div>
                    <img src='images/portfolio/Hutch2.JPG' className='item-img'/>
                    <div>Rendering Graph Components</div>
                    <img src='images/portfolio/Hutch3.JPG' className='item-img'/>
                    </div>
                    }
                    <br></br><br></br>
                    <h3>2- Webpages for rESORTER(Internship)</h3> <Button onClick={onClickTwo} className={classes.button}>{project2Button}</Button>
                    {project2 && 
                    <div>
                    <div>The Log In Page</div>
                    <img src='images/portfolio/Resort0.JPG' className='item-img'/>
                    <div>After Login:</div>
                    <img src='images/portfolio/resort1.JPG' className='item-img'/>
                    </div>
                    }
                     <br></br><br></br>
                    <h3>3- OOP code for a Robot on 5x5 Board(Java)</h3> <Button onClick={onClickThree} className={classes.button}>{project3Button}</Button>
                    {project3 && 
                    <div>
                    The output cannot be shown here. Check it out on my GitHub using the following <a href='https://github.com/sanchitsave/Robot'> link </a>
                    
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}


const useStyles = makeStyles({
  
    button: {
      marginTop: -5,
      borderRadius: 4,
      textTransform: 'uppercase',
      fontWeight: 600,
      backgroundColor: '#46b8da',
      minWidth: 100,
      minHeight: 30,
      color: '#fff',
      border: 'solid 0px #fff',
      boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
      paddingBottom: 5
    }
  })
  
