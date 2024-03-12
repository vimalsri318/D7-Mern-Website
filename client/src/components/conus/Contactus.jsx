/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './contus.css'
import vi from './ass/vs-me.jpeg'
import tk from './ass/92fabe51-b4b6-4951-96a5-59ea0a52dd4d.jpeg'
function Contactus() {
  return (
    <div>
    <div sty>
    <h1 className='hvim'>Reach out our Experts</h1>
    </div>
    <div className='vim' style={{padding:'20px'}}>
        <img src={vi} className='vim' style={{width:'200px'}}alt='vimal'/>
        <h2 className='hvim'>
           VIMALSRINIVASAN
        </h2>
        <p className='pvi'>
                   Personal Consultant<br/>
            FrontEnd Developer<br/>
            UI / UX Designer.
        </p>
        <p  className='pvi' >
            contact : +91 8270942966
        </p>
        <p  className='pvi' >
            G-Mail : vimalsrinivasansn@gmail.com
        </p>
        <a  className='pvi' href='https://www.linkedin.com/in/vimal-srinivasan-764aa6219/'>Linkedin</a>
    </div>
    <hr/>
    <div>
        <img src={tk} className='tkn' style={{width:'200px'}}alt='vimal'/>
        <h2 className='gtk'>
           THIRUKUMARAN.G
        </h2>
        <p className='pvi1' >
            Finace Manager
            BackEnd Developer<br/>
            UI / UX Designer.
        </p>
        <p className='pvi1'>
            contact : +91 9677648663
        </p>
        <p  className='pvi1' >
            G-Mail : gthirukumaranias967766@gmail.com
        </p>
        <a className='pvi1' href='https://www.linkedin.com/in/gtk21/'>Linkedin</a>
    </div>
      
    </div>
  )
}

export default Contactus
