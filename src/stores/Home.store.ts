import { action, computed, observable } from 'mobx';
import { HomeProvider } from "../providers/Home.provider";
import { IUserProfile, MediaCollection } from "../types";

export class HomeStore {
  @observable
  private _userData: IUserProfile;

  @observable
  private _mediaCollection: MediaCollection;

  private _provider: HomeProvider;

  constructor(provider: HomeProvider) {
    this._provider = provider;
  }

  public init(): void {
    this._provider.getUserProfile()
      .then(this.updateUserData.bind(this))
      .catch((e) => {
        console.error(e);
      });
    this._provider.getMedia()
      .then(this.updateMedia.bind(this))
      .catch((e) => {
        console.error(e);
      });
  }

  @computed
  get userData(): IUserProfile {
    return this._userData;
  }

  @computed
  get mediaCollection(): MediaCollection {
    return this._mediaCollection;
  }

  @action
  private updateUserData(userProfile: IUserProfile) {
    this._userData = userProfile;
  }

  @action
  private updateMedia(mediaCollection: MediaCollection) {
    console.log('updateMedia: ', this._mediaCollection);
    this._mediaCollection = mediaCollection;
  }
}