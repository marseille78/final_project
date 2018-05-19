import { AppConfigs } from "../configs/app.configs";
import { BaseProvider } from "./base.provider";
import { IMediaCollection, IUserProfile } from "../types";

export class HomeProvider extends BaseProvider {
  getUserProfile(): Promise<IUserProfile> {
    const {apiUrl, apiSuccessToken} = AppConfigs;
    return this.get<IUserProfile>(`${apiUrl}/users/self/?access_token=${apiSuccessToken}`);
  }
  getMedia(): Promise<IMediaCollection> {
      const {apiUrl, apiSuccessToken} = AppConfigs;
      return this.get<IMediaCollection>(`${apiUrl}/users/self/media/recent?access_token=${apiSuccessToken}`);
    }
}