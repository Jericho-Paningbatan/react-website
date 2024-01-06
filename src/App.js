import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './pages/home.js';
import Portfolio from './pages/portfolio.js';
import About from './pages/about.js';
import Blog from './pages/blog.js';

function App() {
  return (

    <BrowserRouter>

        <Routes>
          <Route index element ={<Home/>}/>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/portfolio" element ={<Portfolio/>}/>
          <Route path="/about me" element ={<About/>}/>
          <Route path="/blog" element ={<Blog/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;

