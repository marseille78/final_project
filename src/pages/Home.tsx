import * as React from 'react';
import { UserProfileComponent } from "../components/userProfile/UserProfile.Component";
import { observer } from "mobx-react";
import { History } from "history";
import { match } from "react-router";
import { HomeProvider } from "../providers/Home.provider";
import { HomeStore } from "../stores/Home.store";
import { MediaListComponent } from "../components/mediaList/MediaList.Component";

interface HomeProps {
  history?: History;
  match?: match<any>;
}

@observer
export class HomePage extends React.Component<HomeProps> {
  private store: HomeStore = new HomeStore(new HomeProvider());

  componentDidMount() {
    this.store.init();
  }

  render() {
    const {userData, mediaCollection} = this.store;
    return(
      <div>
        <UserProfileComponent data={userData}/>
        <MediaListComponent mediaList={mediaCollection}/>
      </div>
    );
  }
}