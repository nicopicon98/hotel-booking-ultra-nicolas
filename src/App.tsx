import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom"
import { LocationsSearch } from './pages/LocationsSearch';
import { HotelsSearch } from './pages/HotelsSearch';
import { SimplePage } from "./pages/SimplePage";
import { TopBar } from "./components/TopBar";
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigurator } from "./utilities";

const App = () => {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigurator />
      <HashRouter>
        <div className="app">
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<SimplePage />} />
              <Route path="/hotel-search" element={<HotelsSearch />} />
              <Route path="/locations-search" element={<LocationsSearch />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </SnackbarProvider>

  );
}

export default App;
