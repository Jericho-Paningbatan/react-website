import Head from './components/navigation.js';
import Main from './components/main.js';
import './css/App.css';

function App() {
  return (
    <div className='main-container'>
      <Head/>
      <div className='second-container'>
      <div className='main-intro'>
          <div className='img-intro'>
            <img src='./img/bg1.PNG' alt='bg1' className='img1'></img>
            <img src='./img/echoolog.PNG' alt='bg2' className='img2'></img>


          </div>
          <div className='left-intro'>
              <h5>Hi,</h5>
              <h2>I'm <span>Jericho Paningbatan</span></h2>
              <h3>Front-End Developer</h3>
              <p className= 'p-first'>With a creative edge and a focus on crafting visually appealing and intuitive user interfaces.</p>
                <p className= 'p-second'> I specialize in transforming ideas into responsive, dynamic websites, blending my technical 
                <br></br>expertise with a keen eye for design. Let's build captivating digital experiences together!</p>

                <div className='buttons'>
                  <div className='button1'><a href='facenook.com'>Hire Me</a></div>
                  <div className='button2'><a href='facebook.com'>Download CV</a></div>
                </div>
                
          </div>
      </div>
      </div>
      
      <Main/>

    </div>
  );
}

export default App;
