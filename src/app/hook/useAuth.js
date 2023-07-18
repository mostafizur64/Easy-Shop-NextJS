import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useAuth = () => {
    const auth = useContext(AuthContext)
    const useClient = typeof window !== 'undefined'
    if (!useClient && !auth) return {}
    if (!auth) {
        throw new Error(
            'You must warp your application with AuthProvider ot use the authAuth'
        )
    }
};

export default useAuth;