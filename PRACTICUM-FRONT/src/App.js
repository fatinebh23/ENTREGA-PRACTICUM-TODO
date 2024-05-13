import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
import Loading from './components/loading.component';
import Wow from './components/wow.component';
import '../src/animate.css';



function App() {

  /*constructor(props) {
    super(props);
    this.state = {
      loading: false, // Puedes inicializar el estado como false si no quieres mostrar el Spinner al principio
    };
  }

  // Método para mostrar el Spinner
  showSpinner = () => {
    this.setState({ loading: true });
  };

  // Método para ocultar el Spinner
  hideSpinner = () => {
    this.setState({ loading: false });
  };
  
  render() {
  const { loading } = this.state;*/

  return (
    <Router>

      <div className="App">
      {/*<Wow /> {/* Componente que inicializa las animaciones */} 

        {/* Renderiza el Spinner si loading es true */}
        {/*{loading && <Loading />}*/}
          {/* Resto del contenido de tu aplicación */}

        {/* Agrega el script de Google Translate al DOM */}
    
        <Outernavbar/>
          <div className="main" >
          <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    
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
              <Route path='*' element={<NotFound />}/>
            </Routes>
            
          </div>
          <Outerfooter/>
        </div>
    </Router>
  );
}
export default App;