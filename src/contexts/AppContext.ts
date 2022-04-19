import { createContext } from 'react';

import { User } from '../interfaces';

export interface IAppContext {
  user: User;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);
