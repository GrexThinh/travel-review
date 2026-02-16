export interface User {
  id: string;
  fullName: string;
  userName: string;
  token: string;
  photoUrl?: string;
  roles: string[];
}
