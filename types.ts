
export type RootStackParamList = {
  // sign in screen doesn’t expect any data 
  SignIn: undefined;

  // map screen needs username passed in
  Map: { githubUsername: string };

  // profile view needs username passed in
  Profile: { githubUsername: string };
};
