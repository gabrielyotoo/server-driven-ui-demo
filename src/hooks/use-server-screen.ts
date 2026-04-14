import { useQuery } from '@tanstack/react-query';
import { useHttp } from './use-http';
import { ServerResponse } from '../types';

export const useServerScreen = (screenName: string) => {
  const httpClient = useHttp();

  const query = useQuery({
    queryKey: ['server-screen', screenName],
    queryFn: async () =>
      httpClient.get<ServerResponse>('/screen', {
        screenName,
      }),
  });

  return query;
};
