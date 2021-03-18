import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import './App.css';
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={'/'} exact component={PokemonList}/>
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;
