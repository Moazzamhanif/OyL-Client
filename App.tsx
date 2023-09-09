import React from 'react'

import RootNavigation from './src/navigation/RootNavigation';
import { AuthProvider } from './src/navigation/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <RootNavigation />
      
    </AuthProvider>
  );
};

export default App;
