import * as React from 'react';
import './App.scss';
import { HeaderComponent } from "./components/header/Header.Component";
import { ProfileProvider } from "./providers/profile.provider";
import { ProfileStore } from "./stores/profile.store";
import { observer } from "mobx-react";
import { UserProfileComponent } from "./components/userProfile/UserProfile.Component";

interface IAppState {
  searchValue: string;
}

const profileProvider = new ProfileProvider();
const profileStore = new ProfileStore(profileProvider);

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

  componentDidMount() {
    profileStore.init();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent
          placeholder="Поиск"
          searchValue={this.state.searchValue}
          onChangeSearchValue={this.handleChangeSearchValue}
        />
        <main>
          <div className="app-container">
            <UserProfileComponent/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
