import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './components/home.component'
import Offert from './components/offert.component'
import Profile from './components/profile.component'
import Index from './components/index.component'
import Acerca from './components/acercadenosotros.component'
import Contacto from './components/contacto.component'
import IndexStudent from './components/indexstudent.component'
import IndexCompany from './components/indexcompany.component'
import PostOffert from './components/postoffert.component'
import PostProfile from './components/postprofile.component'
import Outernavbar from './components/outernavbar.component'
import Outerfooter from './components/outerfooter.component';
import MapContainer from './components/MapContainer.component';
import NotFound from './components/notfound.component';
import WOW from 'wowjs';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import CookiePolicy from './components/CookiePolicy';
import TermsOfUse from './components/TermsOfUse';



class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }).init();
  }

  render() {

    return (
      <Router>

        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <div className="App">

          <Outernavbar />
          <div className="main" >

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/index" element={<Index />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/offert" element={<Offert />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/acercadenosotros" element={<Acerca />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/indexstudent" element={<IndexStudent />} />
              <Route path="/indexcompany" element={<IndexCompany />} />
              <Route path="/postoffert" element={<PostOffert />} />
              <Route path="/postprofile" element={<PostProfile />} />
              <Route path="/map" element={<MapContainer />} />
              <Route path='*' element={<NotFound />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
              <Route path="/legal-notice" element={<LegalNotice/>} />
              <Route path="/cookie-policy" element={<CookiePolicy/>} />
              <Route path="/terms-of-use" element={<TermsOfUse/>} />
            </Routes>

          </div>
          <Outerfooter />
        </div>
      </Router>
    );
  }
}
export default App;