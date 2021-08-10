import { GameContainer } from './components/GameContainer/GameContainer'
import { Provider } from 'react-redux';
import store from './redux/store';

function App () {
  console.log('test')
  return (
    <Provider store={store}>
      <GameContainer />

    </Provider>
  );
}

export default App;
