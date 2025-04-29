import { Routes, Route } from 'react-router';

import './App.css';

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Catalog from './components/catalog/Catalog.jsx';
import Create from './components/create/Create.jsx';
import Login from './components/login/Login.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex-center flex-col px-5">
      <Header />

      <main className="flex-center grow w-full">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;
