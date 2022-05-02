import { Provider } from 'react-redux';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />;
    </Provider>
  );
}

export default App;
