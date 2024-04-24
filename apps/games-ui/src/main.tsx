import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
// import { RegistrationContextProvider } from './contexts/RegistrationContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  /* Testing UI re-render */
  <StrictMode>
      <App /*fallbackElement={<waiting/>*/ />
  </StrictMode>
);
