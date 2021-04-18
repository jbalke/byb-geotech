export async function client<T>(
  request: RequestInfo,
  data?: {} | null,
  customConfig?: Omit<RequestInit, 'Body'>
): Promise<T> {
  const headers = { 'Content-Type': 'application/json' };
  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig?.headers,
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  return window.fetch(request, config).then(async (response) => {
    if (response.ok) {
      return response.json().catch(() => {});
    } else {
      throw new Error(response.statusText);
    }
  });
}
