import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import HeaderBanner from './componants/HeaderBanner/HeaderBanner';
import About from './componants/Pages/About/About';
import Contact from './componants/Pages/Contact/Contact';
import Home from './componants/Pages/Home/Home';
import Portfolio from './componants/Pages/Portfolio/Portfolio';
import Footer from './componants/Shared/Footer/Footer';
import Header from './componants/Shared/Header/Header';

function App() {
  return (
    <div >
           
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/about'>
            <About></About>
          </Route>
          <Route path='/portfolio'>
            <Portfolio></Portfolio>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>



    </div>
  );
}

export default App;
