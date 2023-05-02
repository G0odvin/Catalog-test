import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/index.scss';
import './fonts/Mont-Black.ttf';

import App from './App';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
