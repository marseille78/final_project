import { AppConfigs } from "../configs/app.configs";
import { BaseProvider } from "./base.provider";
import { MediaCollection, IUserProfile } from '../types/index';

export class HomeProvider extends BaseProvider {
  getUserProfile(): Promise<IUserProfile> {
    const {apiUrl, apiSuccessToken} = AppConfigs;
    return this.get<IUserProfile>(`${apiUrl}/users/self/?access_token=${apiSuccessToken}`);
  }
  getMedia(): Promise<MediaCollection> {
    const {apiUrl, apiSuccessToken} = AppConfigs;
    return this.get<MediaCollection>(`${apiUrl}/users/self/media/recent?access_token=${apiSuccessToken}`);
  }
}