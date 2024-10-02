import './App.css';


import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header logo/>
      <div className='content'>
        <div className='content__left'>
          <Sidebar />
        </div>
        <div className='content__right'>
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
