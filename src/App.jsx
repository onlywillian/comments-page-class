import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Comments from './components/Comments';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route path="/" exact render={() => (
          <>
            <Header />
            <Main />
            <Footer />
          </>
        )}/>
        <Route path="/comentários" exact component={Comments}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
