export function parseJSON<T>(json: unknown): T {
  return json as T
}

export function parseJSONArray<T>(json: unknown[]): T[] {
  return json.map((item) => parseJSON<T>(item))
}
