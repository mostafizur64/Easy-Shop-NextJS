import AuthContext from '@/app/context/AuthContext';
import { useContext } from 'react';


const useAuth = () => {
    const auth = useContext(AuthContext)
    const useClient = typeof window !== 'undefined'
    if (!useClient && !auth) return {}
    if (!auth) {
        throw new Error(
            'You must warp your application with AuthProvider ot use the authAuth'
        )
    }
    return auth
};

export default useAuth;