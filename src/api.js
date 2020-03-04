export const baseUrl = "http://localhost:4000";

export function authHeader(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}
