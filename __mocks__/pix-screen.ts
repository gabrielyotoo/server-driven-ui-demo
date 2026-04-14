import { PressableActionType, ServerResponse } from '../src/types';

export const response: ServerResponse = {
  id: 'Pix',
  properties: {
    style: {
      flex: 1,
      justifyContent: 'space-between',
    },
    safeAreaEdges: ['top'],
    statusBar: {
      style: 'dark-content',
    },
  },
  wide: {},
  compact: {
    header: {
      style: {
        justifyContent: 'flex-end',
        padding: 10,
      },
      sections: [
        {
          id: 'Header',
          sectionComponentType: 'Pressable',
          action: { type: PressableActionType.NavigateBack },
          children: [
            {
              id: 'CloseIcon',
              sectionComponentType: 'Image',
              props: {
                source: {
                  uri: 'https://cdn3.iconfinder.com/data/icons/status/100/close_1-512.png',
                },
              },
              styles: { width: 28, height: 28, alignSelf: 'flex-end' },
            },
          ],
        },
      ],
      order: 0,
    },
    texts: {
      style: {
        paddingHorizontal: 10,
      },
      sections: [
        {
          id: 'Title',
          sectionComponentType: 'Text',
          children: 'Resgate com Pix',
          styles: {
            fontSize: 32,
          },
        },
        {
          id: 'Description',
          sectionComponentType: 'Text',
          children:
            'Para utilizar aa funcionalidade de Resgate com Pix, você precisa ter uma conta na PaGol',
        },
      ],
      order: 1,
    },
    content: {
      order: 2,
      style: {
        flex: 0.6,
      },
      sections: [
        {
          id: 'Presentation',
          sectionComponentType: 'Text',
          children:
            'Conheça algumas vantagens e como funciona o Resgate com Pix',
        },
        {
          id: 'Features',
          sectionComponentType: 'ScrollView',
          props: {
            horizontal: true,
            contentContainerStyle: {
              paddingHorizontal: 20,
              columnGap: 10,
            },
          },
          children: [
            {
              id: 'Feature-1',
              sectionComponentType: 'View',
              styles: {
                rowGap: 4,
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'white',
                maxWidth: 200,
              },
              children: [
                {
                  id: 'Feature-1-Image',
                  sectionComponentType: 'Image',
                  props: {
                    source: {
                      uri: 'https://cdn-icons-png.flaticon.com/512/1085/1085821.png',
                    },
                  },
                  styles: { width: 28, height: 28 },
                },
                {
                  id: 'Feature-1-Text',
                  sectionComponentType: 'Text',
                  styles: {
                    overflow: 'hidden',
                  },

                  props: {
                    numberOfLines: 13,
                  },
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique orci sed neque imperdiet, semper euismod dui suscipit. Mauris massa metus, aliquet vitae viverra vestibulum, porta ac ex. Proin varius dictum purus ut ullamcorper. Suspendisse potenti. Nullam finibus eros ac eleifend molestie. Vestibulum tempus auctor justo vitae congue.',
                },
              ],
            },
            {
              id: 'Feature-2',
              sectionComponentType: 'View',
              styles: {
                rowGap: 4,
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'white',
                maxWidth: 200,
              },
              children: [
                {
                  id: 'Feature-2-Image',
                  sectionComponentType: 'Image',
                  props: {
                    source: {
                      uri: 'https://cdn-icons-png.flaticon.com/512/1085/1085821.png',
                    },
                  },
                  styles: { width: 28, height: 28 },
                },
                {
                  id: 'Feature-2-Text',
                  sectionComponentType: 'Text',
                  styles: {
                    overflow: 'hidden',
                  },
                  props: {
                    numberOfLines: 13,
                  },
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique orci sed neque imperdiet, semper euismod dui suscipit. Mauris massa metus, aliquet vitae viverra vestibulum, porta ac ex. Proin varius dictum purus ut ullamcorper. Suspendisse potenti. Nullam finibus eros ac eleifend molestie. Vestibulum tempus auctor justo vitae congue.',
                },
              ],
            },
            {
              id: 'Feature-3',
              sectionComponentType: 'View',
              styles: {
                rowGap: 4,
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'white',
                maxWidth: 200,
              },
              children: [
                {
                  id: 'Feature-3-Image',
                  sectionComponentType: 'Image',
                  props: {
                    source: {
                      uri: 'https://cdn-icons-png.flaticon.com/512/1085/1085821.png',
                    },
                  },
                  styles: { width: 28, height: 28 },
                },
                {
                  id: 'Feature-3-Text',
                  sectionComponentType: 'Text',
                  styles: {
                    overflow: 'hidden',
                  },

                  props: {
                    numberOfLines: 13,
                  },
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique orci sed neque imperdiet, semper euismod dui suscipit. Mauris massa metus, aliquet vitae viverra vestibulum, porta ac ex. Proin varius dictum purus ut ullamcorper. Suspendisse potenti. Nullam finibus eros ac eleifend molestie. Vestibulum tempus auctor justo vitae congue.',
                },
              ],
            },
            {
              id: 'Feature-4',
              sectionComponentType: 'View',
              styles: {
                rowGap: 4,
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'white',
                maxWidth: 200,
              },
              children: [
                {
                  id: 'Feature-4-Image',
                  sectionComponentType: 'Image',
                  props: {
                    source: {
                      uri: 'https://cdn-icons-png.flaticon.com/512/1085/1085821.png',
                    },
                  },
                  styles: { width: 28, height: 28 },
                },
                {
                  id: 'Feature-4-Text',
                  sectionComponentType: 'Text',
                  styles: {
                    overflow: 'hidden',
                  },
                  props: {
                    numberOfLines: 13,
                  },
                  children:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique orci sed neque imperdiet, semper euismod dui suscipit. Mauris massa metus, aliquet vitae viverra vestibulum, porta ac ex. Proin varius dictum purus ut ullamcorper. Suspendisse potenti. Nullam finibus eros ac eleifend molestie. Vestibulum tempus auctor justo vitae congue.',
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      order: 3,
      sections: [
        {
          id: 'Helper',
          children: 'Após criar uma conta na PaGol',
          sectionComponentType: 'Text',
        },
        {
          id: 'Register',
          sectionComponentType: 'Pressable',
          action: {
            type: PressableActionType.PostRequest,
            api: 'pagol',
            endpoint: 'register',
            body: { name: 'test', email: 'test@sdui.app' },
          },
          children: [
            {
              id: 'RegisterText',
              children: 'Realizar cadastro',
              sectionComponentType: 'Text',
            },
          ],
        },
        {
          id: 'NotNow',
          sectionComponentType: 'Pressable',
          action: {
            type: PressableActionType.NavigateBack,
          },
          children: [
            {
              id: 'NotNowText',
              children: 'Agora não',
              sectionComponentType: 'Text',
            },
          ],
        },
      ],
    },
  },
};
