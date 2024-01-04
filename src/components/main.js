import '../css/App.css';

const main = () => {
  return (
    <div className='choose-me'>
    <h1>Choose Me</h1>
        <div className='container'>
        <div className='img-choose'>
                <img src='/img/hand shake.jpg' alt='img' className='handshake-img'></img>

            </div>
            <div className='text-choose'>
                <div className='img-h3-comb'>
                <img src='/img/check.webp' className='check-img' alt='check-img'></img><span></span><h3>Why you should hire me?</h3>
                </div>
          
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Turpis in eu mi bibendum neque egestas congue quisque egestas.</h5>
                <div className='read-more-btn'>
                    READ MORE
                </div>
            </div>

        </div>
        

      </div>
  )
}

export default main
