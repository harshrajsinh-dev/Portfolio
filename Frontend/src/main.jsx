import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NavElemProvider } from './Context/NavElem'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLoginForm from './Components/AdminLoginForm'
import { SiTechcrunch } from 'react-icons/si'
import { SiteProvider } from './Context/SiteContext'
import AdminDashboard from './Components/AdminDashboard'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <SiteProvider>

                <NavElemProvider>
                    <Routes>
                        {/* Public Site */}
                        <Route path="/*" element={<App />} />

                        {/* Admin */}
                         <Route path="/admin-dashboard" element={<AdminDashboard />} />
                        <Route path="/admin" element={<AdminLoginForm />} />
                    </Routes>
                </NavElemProvider>
            </SiteProvider>
        </BrowserRouter>

    </React.StrictMode>
)