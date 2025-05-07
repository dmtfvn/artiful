import { Routes, Route } from 'react-router';

import UserProvider from './components/providers/UserProvider.jsx';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import NotFound from './components/404/NotFound.jsx';

import Home from './components/home/Home.jsx';
import Gallery from './components/gallery/Gallery.jsx';

import Profile from './components/profile/Profile.jsx';
import Create from './components/create/Create.jsx';
import Edit from './components/edit/Edit.jsx';
import Logout from './components/logout/Logout.jsx';

import Login from './components/login/Login.jsx';
import SignUp from './components/signup/SignUp.jsx';

import Auth from './components/guards/Auth.jsx';
import Guest from './components/guards/Guest.jsx';

import CreatedArt from './components/profile/CreatedArt.jsx';
import LikedArt from './components/profile/LikedArt.jsx';

import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen flex-center flex-col px-5">
        <Header />

        <main className="flex-center grow w-full">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route element={<Auth />}>
              <Route path="/profile" element={<Profile />}>
                <Route index element={<CreatedArt />} />
                <Route path="liked" element={<LikedArt />} />
              </Route>

              <Route path="/profile/create" element={<Create />} />

              <Route path="/profile/:artId/edit" element={<Edit />} />

              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route element={<Guest />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserProvider>
  )
}

export default App;
