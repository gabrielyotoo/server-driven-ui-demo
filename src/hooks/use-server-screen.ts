import { useQuery } from '@tanstack/react-query';
import { useHttp } from './use-http';
import { ServerResponse } from '../types';
import Config from 'react-native-config';
import { response as homeResponse } from '../../__mocks__/home-screen';
import { response as pixResponse } from '../../__mocks__/pix-screen';

export const useServerScreen = (screenName: string) => {
  const httpClient = useHttp();

  const query = useQuery({
    queryKey: ['server-screen', screenName],
    queryFn: async () => {
      if (Config.MOCK_API_CALLS) {
        if (screenName === 'Home') {
          return homeResponse;
        }

        return pixResponse;
      }

      return httpClient.get<ServerResponse>('/screen', {
        screenName,
      });
    },
  });

  return query;
};
