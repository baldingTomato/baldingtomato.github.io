import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/NavigationBar.js';
import PopularWebBrowsers from './components/PopularWebBrowsers.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <NavigationBar />
      <PopularWebBrowsers />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
