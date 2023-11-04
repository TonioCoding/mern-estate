//imports
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

//main function
export const PrivateRoute = () => {
    const {currentUser} = useSelector((state) => state.user)
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}
