import * as React from 'react';
import './App.scss';
import { HeaderComponent } from "./components/header/Header.Component";

interface IAppState {
  searchValue: string;
}

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
      <div className="App">
        <HeaderComponent
          placeholder="Поиск"
          searchValue={this.state.searchValue}
          onChangeSearchValue={this.handleChangeSearchValue}
        />
      </div>
    );
  }
}

export default App;
