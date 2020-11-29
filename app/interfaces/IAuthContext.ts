import {User} from './IUser';

export interface IAuthContext {
  user: User;
  login: () => void;
  logout: () => void;
}
