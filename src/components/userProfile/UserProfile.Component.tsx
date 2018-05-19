import * as React from 'react';
// import { IUserProfile } from "../../types";
import { IUserProfile } from "../../types";
import './UserProfile.scss';
import { observer } from "mobx-react";

interface IUserProfileProps {
  data: IUserProfile;
}

@observer
export class UserProfileComponent extends React.Component<IUserProfileProps> {
  constructor(props: IUserProfileProps) {
    super(props);
    this.renderLoader = this.renderLoader.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
  }

  renderLoader() {
    return (
      <div>Loading</div>
    );
  }

  renderProfile() {
    const {
      profile_picture,
      username,
      full_name,
      counts
    } = this.props.data;

    return(
      <div className="user-profile">
        <div className="user-profile__avatar">
          <img src={profile_picture} alt=""/>
        </div>
        <div className="user-profile__details">
          <div className="user-profile__row">
            <h1 className="user-profile__name">{username}</h1>
          </div>
          <div className="user-profile__row user-profile__statistic">
            <div className="user-profile__statistic-item">
              <span className="user-profile__strong">{counts.media}</span> <span>Публикаций</span>
            </div>
            <div className="user-profile__statistic-item">
              <span className="user-profile__strong">{counts.followed_by}</span> <span>Подписчиков</span>
            </div>
            <div className="user-profile__statistic-item">
              <span>Подписки: </span> <span className="user-profile__strong">{counts.follows}</span>
            </div>
          </div>
          <div className="user-profile__row">
            <span className="user-profile__strong">{full_name}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.data) {
      return this.renderProfile();
    }

    return this.renderLoader();
  }
}