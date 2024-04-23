import './App.css';
// import { BrowserRouter ,  Route,  Routes} from 'react-router-dom';
// import Home from './components/pages/Home.jsx'
import { BrowserRouter ,  Route,  Routes} from 'react-router-dom';

import './app.scss'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import About from './components/pages/About';
import { services } from './Data/dummy';
import ServiceDescription from './components/layout/ServicePage/ServceDescription';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <div className='container-App '>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Service' element={<Services/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path="/service/:title" element={  <ServiceDescription data={services} />}>
        
        </Route>
    </Routes>
    </div>
    </BrowserRouter>
    


    </div>
  );
}

export default App;
