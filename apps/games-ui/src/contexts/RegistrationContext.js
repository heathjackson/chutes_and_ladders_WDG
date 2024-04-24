import { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  return (
    <RegistrationContext.Provider>{children}</RegistrationContext.Provider>
  );
};
