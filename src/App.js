import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import ContactUsPage from './pages/contact';
import MainComponent from './components/MainComponent/MainComponent.js'
import Profile from './pages/Profile';

function App() {
  return (
      <BrowserRouter basename= "/re-app">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignupPage} exact />
          <Route path='/signin' component={SigninPage} exact />
          <Route path='/profile' component={() => <Profile authorized={false} />} exact />
          <Route path='/contact' component={ContactUsPage} exact />
          <Route path="/analyse" exact element={<MainComponent />} />
        </Switch>
      </BrowserRouter>
      
  );
}

export default App;
