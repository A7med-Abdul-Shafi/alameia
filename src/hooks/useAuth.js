import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token) {
        const decoded = jwtDecode(token)
        const { id, username, name, roles, tel, emp_no, userPhoto } = decoded.UserInfo

        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"

        return { id, username, name, roles, status, isManager, isAdmin, tel, emp_no, userPhoto }
    } 

    return { username: '', roles: [], isManager, isAdmin, status }
}
export default useAuth