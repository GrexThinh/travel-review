export interface User {
  id: string;
  username: string;
  token: string;
  photoUrl?: string;
  roles: string[];
}
