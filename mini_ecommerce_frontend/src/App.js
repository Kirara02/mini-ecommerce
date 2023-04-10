import './App.css';
import { Routes, Route } from 'react-router-dom';
import DashboardAdminPage from './pages/admin/DashboardAdminPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import KategoriAdminPage from './pages/admin/KategoriAdminPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signin' element={<SignInPage/>} />
      <Route path="/admin/dashboard" element={
        <ProtectedRoute>
          <DashboardAdminPage/>
        </ProtectedRoute>
      } />
      <Route path="/admin/kategori" element={
        <ProtectedRoute>
          <KategoriAdminPage/>
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
