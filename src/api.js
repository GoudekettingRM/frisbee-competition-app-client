export const baseUrl = "http://localhost:4000";

// local: http://localhost:4000
//https://ulti-mate.herokuapp.com

export function authHeader(token, otherHeaders) {
  return {
    headers: {
      ...otherHeaders,
      Authorization: `Bearer ${token}`
    }
  };
}
