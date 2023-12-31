// import react from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom';
// import Mainpage from './components/Layer1/Mainpage';
import Mainpage3 from './components/Layer1/Mainpage_3';
import Photopage from './components/Layer2/Photopage';
import UIpage from './components/Layer2/UIpage';
import Apppage from './components/Layer2/Apppage';
import Designpage from './components/Layer2/Designpage';
import Blogpage from './components/Layer2/Blogpage';
import Illustpage from './components/Layer2/Illustpage';
import Photopage2 from './components/Photography/Photopage2';
import Architectures from './components/Photography/Architecture/Architectures';
import Nature from './components/Photography/Nature/Nature';
import Street from './components/Photography/Street/Street';
import Airplanes from './components/Photography/Airplane/Airplanes';
import Injapan from './components/Photography/Architecture/Japan/Injapan';
import Initaly from './components/Photography/Architecture/Italy/Initaly';
import Brutalism from './components/Photography/Architecture/Brutalism/Brutalism';
import BrutalismSerbia from './components/Photography/Architecture/Brutalism/Serbia/BrutalismSerbia';
import BrutalismBelgrade from './components/Photography/Architecture/Brutalism/Serbia/Beograd/BrutalismBelgrade';
import BelgradeAirport from './components/Photography/Architecture/Brutalism/Serbia/Beograd/BelgradeAirport';
import BrutalismNovisad from './components/Photography/Architecture/Brutalism/Serbia/Novisad/BrutalismNovisad';
import NovisadStation from './components/Photography/Architecture/Brutalism/Serbia/Novisad/Novisadstation';


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
      {/* <Route path="/" element={<Mainpage />} /> */}
      <Route path="/" element={<Mainpage3 />} />
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
      <Route path="/brutalismserbia" element={<BrutalismSerbia />} />
      <Route path="/brutalismbelgrade" element={<BrutalismBelgrade />} />
      <Route path="/belgradeairport" element={<BelgradeAirport />} />
      <Route path="/brutalismnovisad" element={<BrutalismNovisad />} />
      <Route path="/novisadstation" element={<NovisadStation />} />
      <Route path="/injapan" element={<Injapan />} />
      <Route path="/initaly" element={<Initaly />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
