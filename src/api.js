export const baseUrl = process.env.API_BASE_URL || "http://localhost:4000";

export function authHeader(token, otherHeaders) {
  return {
    headers: {
      ...otherHeaders,
      Authorization: `Bearer ${token}`
    }
  };
}
