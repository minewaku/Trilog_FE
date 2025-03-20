import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const auth = useSelector((state) => state.auth);
    return auth.isAuthenicated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
