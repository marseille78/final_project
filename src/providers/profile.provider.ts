import { IUserProfile } from "../types/app.types";
import { AppConfigs } from "../configs/app.configs";

export class ProfileProvider {
  getProfileData(): Promise<IUserProfile> {
    const {apiUrl, apiSuccessToken} = AppConfigs;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${apiUrl}/users/self/?access_token=${apiSuccessToken}`);
      xhr.send();

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            console.log('Provider: ', response.data);
            resolve(response.data);
          } else {
            reject(console.log('Error response'));
          }
        }
      };
    });
  }
}