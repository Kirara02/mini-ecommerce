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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <DashboardAdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/kategori"
        element={
          <ProtectedRoute>
            <KategoriAdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/produk"
        element={
          <ProtectedRoute>
            <ProdukAdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/produk/create"
        element={
          <ProtectedRoute>
            <ProdukAdminCreatePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/produk/detail/:id"
        element={
          <ProtectedRoute>
            <ProdukAdminDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/produk/edit/:id"
        element={
          <ProtectedRoute>
            <ProdukAdminEditPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
