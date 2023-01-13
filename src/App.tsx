import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import { LocationsSearch } from './pages/LocationsSearch';
import { HotelsSearch } from './pages/HotelsSearch';
import { SimplePage } from "./pages/SimplePage";
import { TopBar } from "./components/TopBar";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>

  );
}

export default App;
