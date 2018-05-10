import * as React from 'react';
import './App.scss';
import { HeaderComponent } from "./components/header/Header.Component";
import { ProfileProvider } from "./providers/profile.provider";
import { ProfileStore } from "./stores/profile.store";

interface IAppState {
  searchValue: string;
}

const profileProvider = new ProfileProvider();
const profileStore = new ProfileStore(profileProvider);

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

  componentDidMount() {
    profileStore.init();
  }

  render() {
    console.log(profileStore);
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
