import {createContext} from 'react';
import {IAuthContext} from '../../interfaces/IAuthContext';

const AuthContext = createContext({} as IAuthContext);

export default AuthContext;
