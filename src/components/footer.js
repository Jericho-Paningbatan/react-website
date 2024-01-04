import './footer.css';

const footer = () => {
  return (
<div className="footer" style={{ textAlign: 'center', position: 'absolute', bottom:'-545px', width: '100%', height:'80px', backgroundColor: '#9e1616', padding:'20px'}}>
      
      <div className="social-media" style={{ display: 'flex', justifyContent: 'center', margin:'0 0 5px 5px' }}>
        <a href="https://www.facebook.com/echo.jri.01/">
          <img src="/img/fb.png" alt="fb" style={{ width: '25px', height: '25px', borderRadius: '50%', margin:'0 10px 0 0' }} />
        </a>
        <a href="https://www.instagram.com/echoocoo/">
          <img src="/img/insta.png" alt="insta" style={{ width: '25px', height: '25px', borderRadius: '50%', margin:'0 10px 0 0' }} />
        </a>
        <a href="https://www.linkedin.com/in/jericho-paningbatan/">
          <img src="/img/linkedin.png" alt="linkedin" style={{ width: '25px', height: '25px', borderRadius: '50%', margin:'0 10px 0 0' }} />
        </a>
      </div>
      <div className="copyright" style={{color:'whitesmoke', fontSize:'18px', marginTop:'10px'}}>
        <h6>Copyright © 2024 Echoo Tech. All Rights Reserved.</h6>
      </div>
    </div>
  );
};
  


export default footer
