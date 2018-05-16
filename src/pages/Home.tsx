import * as React from 'react';
import { UserProfileComponent } from "../components/userProfile/UserProfile.Component";
import { IUserProfile } from "../types/app.types";
import { observer } from "mobx-react";

interface HomeProps {
  dataProfile: IUserProfile;
}

@observer
export class HomePage extends React.Component<HomeProps> {
  render() {
    console.log('Home', this.props);
    return(
      <div>
        <UserProfileComponent data={this.props.dataProfile}/>
      </div>
    );
  }
}