import { Routes, Route } from 'react-router-dom';
import About from './routes/about/about.component';
import Shelves from './routes/shelves/shelves.component';
import Library from './routes/library/library.component';
import Navigation from './routes/navigation/navigation.component';
import ActiveShelf from './routes/active-shelf/active-shelf.component';
import Authentication from './routes/authentication/authentication.component';

import './styles/app.styles.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<ActiveShelf />} />
        <Route path="shelves" element={<Shelves />} />
        <Route path="library" element={<Library />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
