import { useQuery } from '@tanstack/react-query';
import { useHttp } from './use-http';
import { ServerResponse } from '../types';
import Config from 'react-native-config';
import { MainStackScreenNames } from '../routes/router';

export const useServerScreen = (screenName: string) => {
  const httpClient = useHttp();

  const query = useQuery({
    queryKey: ['server-screen', screenName],
    queryFn: async () => {
      if (Config.MOCK_API_CALLS) {
        return response;
      }

      return httpClient.get<ServerResponse>('/screen', {
        screenName,
      });
    },
  });

  return query;
};

const response: ServerResponse = {
  id: 'Root',
  properties: {
    style: {
      flex: 1,
      flexDirection: 'column',
      borderColor: 'red',
    },
  },
  wide: {},
  compact: {
    bg: {
      style: {
        maxHeight: '40%',
        width: '100%',
        position: 'relative',
      },
      sections: [
        {
          id: 'BackgroundImage',
          sectionComponentType: 'Image',
          styles: {
            width: '100%',
            height: '100%',
          },
          props: {
            resizeMode: 'cover',
            source: {
              uri: 'https://wallpapers.com/images/hd/gol-linhas-aereas-above-the-clouds-w8xy3kgyz1rqk8g1.jpg',
            },
          },
        },
        {
          id: 'Gradient',
          sectionComponentType: 'Gradient',
          props: {
            colors: ['#2e2e2e', '#2e2e2e', 'transparent'],
          },
          styles: {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '10%',
          },
        },
      ],
      order: 0,
    },
    header: {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        position: 'absolute',
        display: 'flex',
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 10,
        alignItems: 'center',
      },
      sections: [
        {
          id: 'Logo',
          sectionComponentType: 'Text',
          children: 'Smiles :)',
          styles: {
            color: 'white',
            fontSize: 48,
          },
        },
        {
          id: 'HeaderButtons',
          sectionComponentType: 'View',
          children: [
            {
              id: 'PixButton',
              sectionComponentType: 'Pressable',
              action: { to: MainStackScreenNames.Pix },
              children: [
                {
                  id: 'PixIcon',
                  sectionComponentType: 'Image',
                  props: {
                    source: {
                      uri: 'https://files.passeidireto.com/2889edc1-1a70-456a-a32c-e3f050102347/2889edc1-1a70-456a-a32c-e3f050102347.png',
                    },
                  },
                  styles: {
                    height: 28,
                    width: 28,
                  },
                },
              ],
            },
            {
              id: 'NotificationsButton',
              sectionComponentType: 'Pressable',
              action: { to: MainStackScreenNames.Notifications },
              children: [
                {
                  id: 'NotificationsIcon',
                  sectionComponentType: 'Image',
                  props: {
                    source: {
                      uri: 'https://cdn-icons-png.flaticon.com/512/2645/2645897.png',
                    },
                  },
                  styles: {
                    height: 28,
                    width: 28,
                  },
                },
              ],
            },
          ],
          styles: {
            flexDirection: 'row',
            columnGap: 8,
          },
        },
      ],
      order: 1,
    },
    content: {
      order: 2,
      style: {
        backgroundColor: 'white',
        flex: 1,
      },
      sections: [
        {
          id: 'Name',
          sectionComponentType: 'Text',
          children: 'Gabriel',
        },
      ],
    },
  },
};
