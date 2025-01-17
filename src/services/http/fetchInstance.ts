import qs from 'qs';

export const getClient = (params: Record<string, unknown> = {}) => {
  const baseURL = process.env.NEXT_PUBLIC_ADMIN_API_URL;

  if (!baseURL) {
    throw new Error('NEXT_PUBLIC_ADMIN_API_URL is empty');
  }

  const headers: HeadersInit = new Headers({
    'Content-Type': 'application/json',
  });

  if (process.env.ADMIN_API_KEY) {
    headers.set('Authorization', `bearer ${process.env.ADMIN_API_KEY}`);
  }

  const queryParams = qs.stringify({ populate: '*', ...params });

  return (url: string, options: RequestInit = {}) => {
    const fullUrl = `${baseURL}${url}${queryParams ? `?${queryParams}` : ''}`;

    return fetch(fullUrl, {
      ...options,
      headers,
      credentials: 'include',
      next: {
        revalidate: 60,
      },
    });
  };
};
