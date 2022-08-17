/*
 * This file should only contain environment variables that are non-secret.
 */
const isProduction = process.env.NODE_ENV === 'production'

// These are all exposed by the client, so there's no way to protect them anyways.
export const clientTokens = isProduction ? {} : {}

export const apiUrl = isProduction
  ? 'https://valecreative-backend.herokuapp.com/api'
  : 'http://localhost:1337/api'

export const authToken = isProduction
  ? 'edbd766fb78b85ed8fe6283a83034e268df840f79f7e00c015f4c71c45b777b07ce72e6ddbcc391c753a742e34a290ab8448c7860d74ee7a50874ad12ea2825cee941802003035e52d804ee911ebe807b779f835f51c91cf14eb6e68b5a1aff72ef6276c7a2133dc49cbb55002c2fa8c1d814347cd7b8b34dfd40058df8b8013'
  : 'b188f3e4723703060bd6772fca0e1c9bcffff25083a03f249ea0917badb8624a0a91f1bcba49fdf6a486606743bcf27196b743b79ee10177378c21bb6417a0b8cf639c727664bf01887dfc6d253f449c2c559e496b3b2574310fce8006adb534f9683a390503349fb4c2fb1a8c71980b169aba4efca5b0ef9132ad36cd9ca82f'

export const usingJWTCookies = false
