import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './css/footer.css';

const footer = () => {
  return (
<div className="footer">

      <p>CONNECT US:</p>

      <div className="social-media">
      <a href="https://github.com/Jericho-Paningbatan">
          <GitHubIcon/>
        </a>
        <a href="https://www.facebook.com/echo.jri.01/">
        <FacebookTwoToneIcon/>

        </a>
        <a href="https://www.instagram.com/echoocoo/">
          <InstagramIcon/>
        </a>
        <a href="https://www.linkedin.com/in/jericho-paningbatan/">
          <LinkedInIcon/>
        </a>
        <a href="mailto:echoop058@gmail.com">
          <EmailIcon/>
        </a>

       

      </div>
      
      <div className='con-links'>

          <a href='#' className='links'>Privacy Policy</a> |
          <a href='#' className='links'>Terms and Conditions</a> |
          <a href='#' className='links'>FAQ'S</a> |
          <a href='#' className='links'>Contact Us</a> 

      </div>

      <div className="copyright">
        <h6>COPYRIGHT © 2024 ECHOO TECH. ALL RIGHTS RESERVED.</h6>
      </div>
    </div>
  );
};
  


export default footer
