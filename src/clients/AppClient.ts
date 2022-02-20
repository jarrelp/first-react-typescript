import { IAppContext } from '../contexts/AppContext';

import { User } from '../interfaces';

class AppClient implements IAppContext {
  user: User;

  /**
   * Creates an instance of AppClient.
   * @memberof AppClient
   */
  constructor() {
    this.user = {
      id: '9fa087f4-2ea0-4c07-87e8-3ca361910cec',
      name: 'Test User',
      email: 'testuser@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      isAdmin: true,
      isActive: true,
      isVerified: true,
    };
  }
}

export default AppClient;
