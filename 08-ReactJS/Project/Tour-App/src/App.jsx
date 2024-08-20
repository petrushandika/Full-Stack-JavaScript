import TourList from './components/TourList';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Tour.css'

const App = () => {
  return (
    <div>
      <Header/>
      <TourList />
      <Footer/>
    </div>
  );
}

export default App;