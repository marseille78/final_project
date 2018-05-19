export interface IUserProfile {
  full_name: string;
  id: string;
  profile_picture: string;
  username: string;
  counts:  {
    media: number;
    follows: number;
    followed_by: number;
  };
}

export interface IUser {
  'id': string;
  'full_name': string;
  'profile_picture': string;
  'username': string;
}
