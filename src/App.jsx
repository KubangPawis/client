import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import UserLoginPage from './pages/UserLoginPage';
import AdminHomePage from './pages/AdminHomePage';
import NotFoundPage from './pages/NotFoundPage';
import OtpPage from './pages/OtpPage';
import MainLayout from "./layouts/MainLayout";
import PermissionManagementPage from "./pages/PermissionManagementPage";
import UserLogPage from "./pages/UserLogPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import SelectLogin from "./pages/SelectLogin";
import EditInfoPage from "./pages/EditInfoPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

const App = () => {
  return (
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<SelectLogin />}/>
      <Route path='/login-user' element={<UserLoginPage />}/>
      <Route path='/login-admin' element={<AdminLoginPage />}/>
      <Route path='/forgot-pass' element={<ForgotPasswordPage />}/>
      <Route path='/otp' element={<OtpPage />}/>
      <Route path='/admin' element={<AdminHomePage />}/>

      <Route path='/' element={<MainLayout />}>
        <Route path='/edit-info' element={<EditInfoPage />}/>
        <Route path='/user-logs' element={<UserLogPage />}/>
        <Route path='/permissions' element={<PermissionManagementPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App
