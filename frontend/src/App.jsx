import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import PrivateRoute from "./components/PrivateRoute";
import { useUserStore } from "./stores/useUserStore";

export default function App() {
  const user = useUserStore((state) => state.user);

  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={
            user ? <Navigate to="/dashboard" replace /> : <RegisterPage />
          }
        />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/personal-info/:id"
          element={
            <PrivateRoute>
              <PersonalInfoPage />
            </PrivateRoute>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Navigate to={user ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}
