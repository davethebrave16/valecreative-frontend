import axios from 'axios'
import lodashGet from 'lodash/get'
import { networkErrorMessages } from '@/common/constants/messages'
import { apiUrl, authToken } from '@/common/config/environment'
import qs from 'qs'

const baseAxiosConfig = {
  baseURL: apiUrl,
  timeout: 5000,
}

const authorizationHeader = {
  Authorization: 'Bearer ' + authToken
}

export const BaseAPI = axios.create(baseAxiosConfig)

/**
 * @description These pieces allow us to throw errors on connection timeouts
 * @see https://github.com/axios/axios/issues/647#issuecomment-459517694
 */
const getRequestAbortionPieces = () => {
  const abort = axios.CancelToken.source()
  const connectionTimeout = setTimeout(
    () => abort.cancel(`Connection timeout of ${baseAxiosConfig.timeout}ms.`),
    baseAxiosConfig.timeout
  )

  return { abort, connectionTimeout }
}

export const get = async (
  path: string,
  additionalHeaders: Record<string, string> = {},
  {
    parameters,
  }: { parameters?: Record<string, unknown> } = {},
  axiosClient = BaseAPI
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces()

  return axiosClient
    .get(`/${path}`, {
      headers: { ...authorizationHeader, ...additionalHeaders },
      cancelToken: abort.token,
      params: parameters,
      /**
       * @description paramsSerializer takes an array of query params that is usually
       * serialized like this '/api/?id[]=1&id[]=2' and converts it into '/api/?id=1&id=2'
       * to better work with the API
       * */
      paramsSerializer: (parameters_) =>
        qs.stringify(parameters_, { arrayFormat: 'repeat' }),
    })
    .then((response) => {
      clearTimeout(connectionTimeout)
      return response.data
    })
    .catch((error) => {
      clearTimeout(connectionTimeout)
      throw error
    })
}

export const post = async (
  path: string,
  body: Record<string, unknown>,
  additionalHeaders: Record<string, string> = {},
  { token }: { token?: string; parameters?: Record<string, unknown> } = {},
  axiosClient = BaseAPI
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces()

  return axiosClient
    .post(`/${path}`, body, {
      headers: { ...setAuthorizationHeader(token), ...additionalHeaders },
      cancelToken: abort.token,
    })
    .then((response) => {
      clearTimeout(connectionTimeout)
      return response.data
    })
    .catch((error) => {
      clearTimeout(connectionTimeout)
      throw error
    })
}

export const patch = async (
  path: string,
  body: Record<string, unknown>,
  additionalHeaders: Record<string, string> = {},
  { token }: { token?: string; parameters?: Record<string, unknown> } = {},
  axiosClient = BaseAPI
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces()

  return axiosClient
    .patch(`/${path}`, body, {
      headers: { ...setAuthorizationHeader(token), ...additionalHeaders },
      cancelToken: abort.token,
    })
    .then((response) => {
      clearTimeout(connectionTimeout)
      return response.data
    })
    .catch((error) => {
      clearTimeout(connectionTimeout)
      throw error
    })
}

export const put = async (
  path: string,
  body: Record<string, unknown>,
  additionalHeaders: Record<string, string> = {},
  { token }: { token?: string; parameters?: Record<string, unknown> } = {},
  axiosClient = BaseAPI
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces()

  return axiosClient
    .put(`/${path}`, body, {
      headers: { ...setAuthorizationHeader(token), ...additionalHeaders },
      cancelToken: abort.token,
    })
    .then((response) => {
      clearTimeout(connectionTimeout)
      return response.data
    })
    .catch((error) => {
      clearTimeout(connectionTimeout)
      throw error
    })
}

/**
 * @description Not for usage with Resources API.
 * Take an expected server error object and return its error. If object is unexpected,
 * assume the server is down and return a relavant error message.
 *
 */
export const getServerErrorMessage = (errorObject: Error): string => {
  // _.get's third argument is the default message
  // if errorObject.response.data.error doesn't resolve, it means that the server is down}

  const errorMessage = lodashGet(
    errorObject,
    'response.data.message',
    networkErrorMessages.serverDown
  )

  return errorMessage
}
