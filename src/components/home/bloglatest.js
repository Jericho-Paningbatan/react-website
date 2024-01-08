import '../css/bloglatest.css'

const Bloglatest = () => {
  return (
    <div className="bloglatest-con">
        <h1>Latest Blogs</h1>
        <div className='main-con'>
                 <div className="left-con">

                    <div className="blogcard">
                        <img src="img/4.jpg"/>
                        <div className='info-con'>
                                <p>Posted: January 8, 2024</p>
                                <h3>What is Aws?</h3>
                                <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim.</p>
                                <div className='btn-div'>
                                     <div className="readmore-btn">Read More</div>

                               </div>
                        </div>
                        

                    </div>

                    <div className="blogcard">
                    <img src="img/4.jpg"/>
                        <div className='info-con'>
                                <p>Posted: January 8, 2024</p>
                                <h3>What is Aws?</h3>
                                <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim.</p>
                                <div className='btn-div'>
                                     <div className="readmore-btn">Read More</div>

                               </div>
                        </div>
                    </div>

                    <div className="blogcard">
                        <img src="img/4.jpg"/>
                        <div className='info-con'>
                                <p>Posted: January 8, 2024</p>
                                <h3>What is Aws?</h3>
                                <p className='p-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim.</p>
                               <div className='btn-div'>
                                     <div className="readmore-btn">Read More</div>

                               </div>
                        </div>

                    </div>


                </div>

                <div className="right-con">

                    <div className='search-bar'>
                        
                        <h3>Find Articles</h3>
                        <div className='search'>

                            <input type="text" className="search-input" placeholder='Search'></input>
                            <div className="search-btn">Search</div>

                        </div>
                            <div className='h4-div'>
                                <h4>Follow Me</h4>

                            </div>

                            <div className='social-con'>
                                
                                <a href="https://www.facebook.com/echo.jri.01/" class="fa fa-facebook"></a>
                                <a href="https://www.instagram.com/echoocoo/" class="fa fa-instagram"></a>
                                <a href="https://www.linkedin.com/in/jericho-paningbatan/" class="fa fa-linkedin"></a>
                                <a href="https://github.com/Jericho-Paningbatan"  class="fa fa-github"></a>
                                <a href="mailto:echoop058@gmail.com" class="fa fa-envelope"></a>
                                

                            </div>
                      

                    </div>
              

                </div>
        </div>
      
    </div>
  )
}

export default Bloglatest
