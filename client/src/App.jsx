import { Routes, Route } from 'react-router';

import './App.css';

import Header from './components/header/Header.jsx';

import Home from './components/home/Home.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import Create from './components/create/Create.jsx';
import Profile from './profile/Profile.jsx';
import Login from './components/login/Login.jsx';
import SignUp from './components/signup/SignUp.jsx';

import NotFound from './components/404/NotFound.jsx';

import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex-center flex-col px-2.5">
      <Header />

      <main className="flex-center grow w-full">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App;
