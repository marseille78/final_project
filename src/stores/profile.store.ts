import { observable, action } from "mobx";
import { ProfileProvider } from "../providers/profile.provider";
import { IUserProfile } from "../types/app.types";

export class ProfileStore {
  @observable
  private _userName: string = '';

  private _provider: ProfileProvider;

  constructor(provider: ProfileProvider) {
    this._provider = provider;
    console.log(this._userName);
  }

  public init(): void {
    const res = this._provider.getProfileData();
    res
      .then(this.updateUserProfile.bind(this))
      .catch((e) => {
        throw new Error(e.statusMessage);
      });
  }

  @action
  private updateUserProfile(userProfile: IUserProfile) {
    this._userName = userProfile.username;
    console.log('userProfile: ', userProfile);
  }
}