import { observable, action } from "mobx";
import { ProfileProvider } from "../providers/profile.provider";
import { IUserProfile } from "../types/app.types";

export class ProfileStore {
  @observable
  private _userProfile: IUserProfile;

  private _provider: ProfileProvider;

  constructor(provider: ProfileProvider) {
    this._provider = provider;
  }

  public init(): void {
    const res = this._provider.getProfileData();
    res
      .then(this.updateUserProfile.bind(this))
      .catch((e) => {
        throw new Error(e.statusMessage);
      });
  }

  public get userProfile() {
    return this._userProfile;
  }

  @action
  private updateUserProfile(userProfile: IUserProfile) {
    this._userProfile = userProfile;
  }
}