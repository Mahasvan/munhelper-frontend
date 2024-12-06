

import Header from './components/header/Header';
import Footer from './components/footer/Footer';


import { Outlet } from 'react-router';


function App() {
  return (
    <div className="App">
      <Header logo/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
