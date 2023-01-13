import { AxiosInterceptor } from './interceptors';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

AxiosInterceptor();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

