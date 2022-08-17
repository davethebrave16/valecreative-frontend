/*
 * This file should only contain environment variables that are non-secret.
 */
const isProduction = process.env.NODE_ENV === 'production'

// These are all exposed by the client, so there's no way to protect them anyways.
export const clientTokens = isProduction ? {} : {}

export const apiUrl = process.env.API_URL
export const authToken = process.env.AUTH_TOKEN

export const usingJWTCookies = false
