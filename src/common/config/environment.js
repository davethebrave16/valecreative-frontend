/*
 * This file should only contain environment variables that are non-secret.
 */
const isProduction = process.env.NODE_ENV === 'production'

// These are all exposed by the client, so there's no way to protect them anyways.
export const clientTokens = isProduction ? {} : {}

export const apiUrl = process.env.NEXT_PUBLIC_API_URL
export const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN
export const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL

export const usingJWTCookies = false
