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
function App() {
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
