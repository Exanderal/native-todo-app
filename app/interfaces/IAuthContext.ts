import {Dispatch, SetStateAction} from 'react';

export interface IAuthContext {
  userLogged: boolean;
  setUserLogged: Dispatch<SetStateAction<boolean>>;
}
