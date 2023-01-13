import {
  Routes,
  Route,
  HashRouter 
} from "react-router-dom"
import { LocationsSearch } from './pages/LocationsSearch';
import { HotelsSearch } from './pages/HotelsSearch';
import { SimplePage } from "./pages/SimplePage";
import { TopBar } from "./components/TopBar";

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <main className="content">
          <TopBar />
          <Routes>
            <Route path="/" element={<SimplePage />} />
            <Route path="/Hotel-Search" element={<HotelsSearch />} />
            <Route path="/Locations-Search" element={<LocationsSearch />} />
          </Routes>
        </main>
      </div>
    </HashRouter>

  );
}

export default App;
