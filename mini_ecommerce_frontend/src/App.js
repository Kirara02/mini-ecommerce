import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardAdminPage from "./pages/admin/DashboardAdminPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import KategoriAdminPage from "./pages/admin/KategoriAdminPage";
import ProdukAdminPage from "./pages/admin/ProdukAdminPage";
import ProdukAdminCreatePage from "./pages/admin/ProdukAdminCreatePage";
import ProdukAdminDetailPage from "./pages/admin/ProdukAdminDetailPage";
import ProdukAdminEditPage from "./pages/admin/ProdukAdminEditPage";
import SignUpPage from "./pages/SignUpPage";
import Forbidden from "./components/Forbidden";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forbidden" element={<Forbidden></Forbidden>} />
      <Route
        path="/user/dashboard"
        element={
          <ProtectedRoute userRole="user">
            <DashboardAdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute userRole="admin">
            <DashboardAdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/kategori"
        element={
          <ProtectedRoute userRole="admin">
            <KategoriAdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/produk"
        element={
          <ProtectedRoute userRole="admin">
            <ProdukAdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/produk/create"
        element={
          <ProtectedRoute userRole="admin">
            <ProdukAdminCreatePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/produk/detail/:id"
        element={
          <ProtectedRoute userRole="admin">
            <ProdukAdminDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/produk/edit/:id"
        element={
          <ProtectedRoute userRole="admin">
            <ProdukAdminEditPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
