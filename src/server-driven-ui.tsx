import { ServerResponse } from './types';
import { SectionRenderer } from './section-renderer';
import { View } from 'react-native';

export const ServerDrivenUi = () => {
  const placements = Object.entries(response.compact);
  return (
    <View {...response.properties}>
      {placements
        .sort(([_, a], [__, b]) => a.order - b.order)
        .map(([name, placement]) => (
          <View style={placement.style} key={name}>
            {placement.sections.map(section => (
              <SectionRenderer key={section.id} section={section} />
            ))}
          </View>
        ))}
    </View>
  );
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
            { id: 'PixButton', sectionComponentType: 'Text', children: 'Pix' },
            {
              id: 'NotificationsButton',
              sectionComponentType: 'Text',
              children: 'Notifications',
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
