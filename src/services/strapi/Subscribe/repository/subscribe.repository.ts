import { getClient } from '@/services/http/fetchInstance';

export const postSubscription = async (formData: { email: string }) => {
  const client = getClient();

  const response = await client('/api/subscribers/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to subscribe');
  }

  const data = await response.json();

  return data;
};
