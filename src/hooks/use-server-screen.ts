import { useQuery } from '@tanstack/react-query';
import { useHttp } from './use-http';
import { Screen } from '../types';

export const useServerScreen = (screenName: string) => {
  const httpClient = useHttp();

  const query = useQuery({
    queryKey: ['server-screen', screenName],
    queryFn: () => httpClient.get<Screen>(`/screens/name/${screenName}`),
  });

  return query;
};
