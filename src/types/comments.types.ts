export interface IComment {
  id: string;
  from: {
    username: string;
  };
  text: string;
  created_time: string;
}