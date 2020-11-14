import React from 'react';
import Logo from './components/logo';

const App = () => {
    return ( 
      <div className="w-full container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div className="lg:w-2/5 w-4/5">
            <Logo />
          </div>
        </div>
      </div>
    )
}

export default App;