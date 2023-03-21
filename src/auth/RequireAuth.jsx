import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Dashboard from "../pages/dashboard/Dashboard"
const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    const { roles } = useAuth() 

    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Dashboard />
            : <Navigate to="/login" state={{ from: location }} replace />
    )

    return content
}
export default RequireAuth