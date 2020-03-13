export const baseUrl = "https://ulti-mate.herokuapp.com";

// local: http://localhost:4000

export function authHeader(token, otherHeaders) {
  return {
    headers: {
      ...otherHeaders,
      Authorization: `Bearer ${token}`
    }
  };
}
