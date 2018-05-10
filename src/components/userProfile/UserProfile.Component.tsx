import * as React from 'react';
import { IUserProfile } from "../../types/app.types";

interface IUserProfileProps {
  dataUserProfile?: IUserProfile|null;
}

export class UserProfileComponent extends React.Component<IUserProfileProps> {
  render() {
    console.log(this.props);
    return(
      <div>UserProfileComponent</div>
    );
  }
}