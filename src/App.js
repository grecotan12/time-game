import './App.css';
import { Game } from './components/Game';
import { RuleScreen } from './components/RuleScreen';
import { Title } from './components/Title';
import { Route, Redirect, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Title />
      <div className='flex-grow-1'>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/rule" />
          </Route>
          <Route path="/rule">
            <RuleScreen/>
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

