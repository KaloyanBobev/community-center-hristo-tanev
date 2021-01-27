import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';
import Activity from './pages/activity';
import GalleryAvia from './pages/galleryAvia';
import Library from './pages/library';
import Membership from './pages/membership';
import notFound from './pages/notFound';
import Pictures from './pages/pictures';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pictures" component={Pictures} />
        <Route path="/about" component={About} />
        <Route path="/activity" component={Activity} />
        <Route path="/galleryAvia" component={GalleryAvia} />
        <Route path="/library" component={Library} />
        <Route path="/membership" component={Membership} />
        <Route component={notFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
