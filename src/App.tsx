import * as React from 'react';
import './App.scss';
import { HeaderComponent } from "./components/header/Header.Component";
import { observer } from "mobx-react";
import { HashRouter as  Router, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { NotFoundPage } from "./pages/NotFound";
import { Switch } from "react-router";

interface IAppState {
  searchValue: string;
}

@observer
class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
  }

  handleChangeSearchValue(searchValue: string): void {
    this.setState((state) => {
      return {...state, searchValue};
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderComponent
            placeholder="Поиск"
            searchValue={this.state.searchValue}
            onChangeSearchValue={this.handleChangeSearchValue}
          />
          <main className="app-main">
            <div className="app-container">
              <Switch>
                <Route
                  exact={true}
                  path={'/'}
                  render={({...props}) => <HomePage {...props} />}
                />
                <Route path={'/about'} component={AboutPage} />
                <Route exact={true} path={'*'} component={NotFoundPage} />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
