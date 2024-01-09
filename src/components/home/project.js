import React, { useRef, useState, useEffect } from 'react';
import KeyboardDoubleArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowLeftTwoTone';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import '../css/project.css';

const Project = () => {
  const contentRefRow1 = useRef(null);
  const contentRefRow2 = useRef(null);

  const [showLeftBtnRow1, setShowLeftBtnRow1] = useState(false);
  const [showRightBtnRow1, setShowRightBtnRow1] = useState(true);
  const [showLeftBtnRow2, setShowLeftBtnRow2] = useState(false);
  const [showRightBtnRow2, setShowRightBtnRow2] = useState(true);

  const handleScrollRow1 = () => {
    const content = contentRefRow1.current;
    setShowLeftBtnRow1(content.scrollLeft > 0);
    setShowRightBtnRow1(content.scrollLeft + content.clientWidth < content.scrollWidth - 1);
  };

  const handleScrollRow2 = () => {
    const content = contentRefRow2.current;
    setShowLeftBtnRow2(content.scrollLeft > 0);
    setShowRightBtnRow2(content.scrollLeft + content.clientWidth < content.scrollWidth - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const breakpoint = 850; // Set your desired breakpoint

      setShowLeftBtnRow1(false);
      setShowRightBtnRow1(windowWidth <= breakpoint);
      setShowLeftBtnRow2(false);
      setShowRightBtnRow2(windowWidth <= breakpoint);
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  const handleRightBtnClickRow1 = () => {
    const content = contentRefRow1.current;
    content.scrollLeft += 300;
    setShowLeftBtnRow1(true);
    setShowRightBtnRow1(content.scrollLeft + content.clientWidth < content.scrollWidth - 1);
  };

  const handleLeftBtnClickRow1 = () => {
    const content = contentRefRow1.current;
    content.scrollLeft -= 300;
    setShowRightBtnRow1(true);
    setShowLeftBtnRow1(content.scrollLeft > 0);
  };

  const handleRightBtnClickRow2 = () => {
    const content = contentRefRow2.current;
    content.scrollLeft += 300;
    setShowLeftBtnRow2(true);
    setShowRightBtnRow2(content.scrollLeft + content.clientWidth < content.scrollWidth - 1);
  };

  const handleLeftBtnClickRow2 = () => {
    const content = contentRefRow2.current;
    content.scrollLeft -= 300;
    setShowRightBtnRow2(true);
    setShowLeftBtnRow2(content.scrollLeft > 0);
  };

  return (
    <div className="project-container">
      <h1>Recent Project</h1>
      <div className="sub-container">
     
        <div className='view-btn'>
            SEE MORE
        </div>
        <div className='row'  ref={contentRefRow1} onScroll={handleScrollRow1}>
          <div className='left-btn' style={{ display: showLeftBtnRow1 ? 'block' : 'none' }} onClick={handleLeftBtnClickRow1}>
             <button id='lft-btn'>
                <KeyboardDoubleArrowLeftTwoToneIcon/>
             </button>
          </div>
                <div className="card">

                  <div className='img-con'>
                  <img src="img/B.png" alt="card"/>

                  </div>
                  <div className='info-pro'>
                      <h4> Pet Grooming Cafe Management System (Desktop App)</h4>
                      <div className='source-btn'>View Source Code</div>

                  </div>

                
                  </div>
                  <div className="card">

                  <div className='img-con'>

                      <img src="img/E.png" alt="card"/>

                  </div>
                
                  <div className='info-pro'>
                          <h4> More Projects Coming Soon!! (Stay Tuned)</h4>
                          <div className='source-btn'>View Source Code</div>

                  </div>

                 
                  </div>


                <div className="card">
                
                        <div className='img-con'>

                              <img src="img/E.png" alt="card"/>
                        </div>
                        <div className='info-pro'>

                            <h4> More Projects Coming Soon!! (Stay Tuned)</h4>
                            <div className='source-btn'>View Source Code</div>
                        </div>

                          

                </div>
              <div className="card">

             
                        <div className='img-con'>
                          <img src="img/E.png" alt="card"/>

                                                  
                        </div>

                        <div className='info-pro'>

                            <h4> More Projects Coming Soon!! (Stay Tuned)</h4>
                            <div className='source-btn'>View Source Code</div>

                        </div>

                          
                  </div>  
                  <div className='right-btn'>
             <button id='rgt-btn' style={{ display: showRightBtnRow1 ? 'block' : 'none' }} onClick={handleRightBtnClickRow1}>
                <KeyboardDoubleArrowRightTwoToneIcon/>
             </button>
          </div>
            
          </div>
          {/* ROW */}
          <div className='view-btn'>
            SEE MORE
        </div>
          <div className='row'  ref={contentRefRow2} onScroll={handleScrollRow2}>

          <div className='left-btn' style={{ display: showLeftBtnRow2 ? 'block' : 'none' }} onClick={handleLeftBtnClickRow2}>
             <button id='lft-btn'>
                <KeyboardDoubleArrowLeftTwoToneIcon/>
             </button>
          </div>

          <div className="card">

          <div className='img-con'>
            <img src="img/C.png" alt="card"/>

                          
          </div>
          <div className='info-pro'>
                <h4> Pet Grooming Cafe Management System (Web App)</h4>
                <div className='source-btn'>View Source Code</div>
          </div>

               

          </div>
              <div className="card">

                  <div className='img-con'>
                    <img src="img/D.png" alt="card"/>

                  </div>
                  <div className='info-pro'>
                      <h4>My Portfolio Website (React JS)</h4>
                      <div className='source-btn'>View Source Code</div>
                  </div>

                 
              </div>

            <div className="card">
                  <div className='img-con'>
                    <img src="img/E.png" alt="card"/>

                  </div>
                  <div className='info-pro'>

                    <h4> More Projects Coming Soon!! (Stay Tuned)</h4>
                    <div className='source-btn'>View Source Code</div>

                  </div>

                  
              </div>

              <div className="card">
                  <div className='img-con'>
                      <img src="img/E.png" alt="card"/>

                  </div>

                    <div className='info-pro'>
                      <h4> More Projects Coming Soon!! (Stay Tuned)</h4>
                      <div className='source-btn'>View Source Code</div>

                    </div>
                  
              </div>

              <div className='right-btn' style={{ display: showRightBtnRow2 ? 'block' : 'none' }} onClick={handleRightBtnClickRow2}>
             <button id='rgt-btn'>
                <KeyboardDoubleArrowRightTwoToneIcon/>
             </button>
          </div>
            
                              
              </div>
        </div>      
    </div>
  )
}

export default Project
