import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = () => {
    const auth = useSelector((state) => state.auth);
    return auth.isAuthenicated ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthRoute;
