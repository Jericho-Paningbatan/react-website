import '../components/css/App.css';
import Head from '../components/navigation.js';
import Footer from '../components/footer.js';
import Main from '../components/home/main.js';
import Project from '../components/home/project.js';



const home = () => {

    function downloadcv () {

        var file = "files/Jericho-Paningbatan-Resume.pdf";
        var a = document.createElement('a');
    
        a.href = file;
        a.download = 'Jericho-Paningbatan-Resume.pdf';
    
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    
      };
    


  return (

    <div>

        <Head/>
           
    <div className='main-container'>
      <div className='second-container'>
      <div className='main-intro'>
          <div className='img-intro'>
            <img src='img/bg1.png' alt='bg1' className='img1'></img>
            <img src='img/echoolog.png' alt='bg2' className='img2'></img>


          </div>
          <div className='left-intro'>
              <h5>Hi,</h5>
              <h2>I'm <span>Jericho Paningbatan</span></h2>
              <h3>Front-End Developer</h3>
              <p className= 'p-first'>With a creative edge and a focus on crafting visually appealing and intuitive user interfaces.</p>
                <p className= 'p-second'> I specialize in transforming ideas into responsive, dynamic websites, blending my technical 
                <br></br>expertise with a keen eye for design. Let's build captivating digital experiences together!</p>

                <div className='buttons'>
                  <div className='button1'>Hire Me</div>
                  <div className='button2' onClick={downloadcv}>Download CV</div>
                </div>
                
          </div>
      </div>
      </div>
      
    
    </div>

            <Main/>
            <Project/>
            <Footer/>

    </div>
  )
}

export default home