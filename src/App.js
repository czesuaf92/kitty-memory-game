import { GameContainer } from './components/GameContainer/GameContainer'
import { Provider } from 'react-redux';
import store from './redux/store';

function App () {
  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  );
}

export default App;
