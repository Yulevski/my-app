// import react from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Photopage from './components/Photopage';
import UIpage from './components/UIpage';
import Apppage from './components/Apppage';
import Designpage from './components/Designpage';
import Blogpage from './components/Blogpage';
import Illustpage from './components/Illustpage';
import Photopage2 from './components/Photopage2';
import Architectures from './components/Architectures';
import Nature from './components/Nature';
import Street from './components/Street';
import Airplanes from './components/Airplanes';
import Brutalism from './components/Brutalism';
import Injapan from './components/Injapan';
import Initaly from './components/Initaly';

import './App.css';

function App() {
  return (

    <BrowserRouter>
     {/* <!-- Header Start --> */}
    {/* <header class="site-header">
      <div class="wrapper-site-header_wrapper">
      <h1 className='title-app'>Yu's private works 18+</h1>
          <ul class="nav_wrapper">
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
            <li class="nav_item"><NavLink to="/main">Main</NavLink></li>
          </ul>
      </div>
    </header> */}
    {/* <!-- Header End --> */}

     <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/photopage" element={<Photopage />} />
      <Route path="/uipage" element={<UIpage />} />
      <Route path="/designpage" element={<Designpage />} />
      <Route path="/apppage" element={<Apppage />} />
      <Route path="/blogpage" element={<Blogpage />} />
      <Route path="/illustpage" element={<Illustpage />} />
      <Route path="/photopage2" element={<Photopage2 />} />
      <Route path="/architectures" element={<Architectures />} />
      <Route path="/nature" element={<Nature />} />
      <Route path="/street" element={<Street />} />
      <Route path="/airplanes" element={<Airplanes />} />
      <Route path="/brutalism" element={<Brutalism />} />
      <Route path="/injapan" element={<Injapan />} />
      <Route path="/initaly" element={<Initaly />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
