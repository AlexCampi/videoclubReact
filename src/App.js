import './App.css';
import Cabecera from './Cabecera';
import videoclub from './datos/videoclub';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <>
    <Cabecera/>
    <Main peliculas = {videoclub}/>
    <Footer/>
    </>
  );
}

export default App;
