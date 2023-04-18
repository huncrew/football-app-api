import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Register, ProtectedRoute } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Profile,
  MyTeam,
  AllTeams,
  SharedLayout,
  Settings,
  UpcomingMatches,
  BestBets
} from './pages/dashboard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {

  let lightMode = useSelector((store) => store.lightMode)
  const htmlElement = document.getElementsByTagName('html')

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("UniqueIDlightMode")) == null){
      localStorage.setItem("UniqueIDlightMode", JSON.stringify(false))
    }
  },[])

  useEffect(()=>{

      htmlElement[0].style.filter = !lightMode ? 'invert(0.93) hue-rotate(200deg) saturate(80%) brightness(90%)' : 'none'
    
  },[lightMode])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllTeams />} />
          <Route path='all-teams' element={<AllTeams />} />
          <Route path='my-team' element={<MyTeam />} />
          <Route path='profile' element={<Profile />} />

          <Route path='upcoming-matches' element={<UpcomingMatches />} />
          <Route path='best-bets' element={<BestBets />} />
          <Route path='settings' element={<Settings />} />

        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
