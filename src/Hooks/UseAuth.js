import { useContext } from 'react';
import { AuthContext } from '../Components/Context/AuthProvider';


const UseAuth = () => {
    return useContext(AuthContext);
};

export default UseAuth;