import { post } from "./Api";

export const signIn = (email, password) => {
  console.log("signIn", email, password);
  return post("/login", { email, password });
};
export const signOut = () => {
  return post("/logout", {});
};
export const signUp = (data) => {
  return post("/client_signup", data);
};
export const forgotPassword = (data) => {
  return post("/forgotpassword", data);
};
export const resetPassword = (data) => {
  return post("/resetpassword", data);
};
export const tutorSignUp = (data) => {
  return post("/tutor_signup", data);
};

// export function* signIn(email, password){
//     const jsonData = yield Api.post("/login", {email, password});
//     return jsonData;
// }

// export function* signOut() {
//     const jsonData = yield Api.post("/logout", {});
//     return jsonData;
// }

// export function* signUp(data){
//     const jsonData = yield Api.post("/register", data);
//     return jsonData;
// }

// export function* forgotPassword(data) {
//     const jsonData = yield Api.post("/forgotpassword", data);
//     return jsonData;
// }

// export function* resetPassword(data) {
//     const jsonData = yield Api.post("/resetpassword", data);
//     return jsonData;
// }
