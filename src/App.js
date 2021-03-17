import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import './App.css';
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={'/pokemon/test'}>
          Search
        </NavLink>
      </nav>
      <Switch>
        <Route path={'/'} exact component={PokemonList}/>
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon}/>
        <Redirect to={'/'} />
      </Switch>
    </div>
  );
}

export default App;