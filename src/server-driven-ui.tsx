import { Layout, Section, ServerResponse } from './types';
import { SectionRenderer } from './section-renderer';
import { View } from 'react-native';
import { Image } from '@components/image';

const getOrder = (section: Section, placements: Array<Layout[string]>) => {
  return (
    placements.find(({ sections }) =>
      sections.some(({ id }) => id === section.id),
    )?.order ?? 0
  );
};

export const ServerDrivenUi = () => {
  const rootScreen = response.screen;

  if (rootScreen) {
    const placements = Object.values(rootScreen.compact);
    const sections = response.sections
      .filter(({ id }) => {
        const sectionsInScreen = placements
          .sort((a, b) => a.order - b.order)
          .reduce<string[]>(
            (acc, cur) =>
              (acc = [
                ...acc,
                ...cur.sections.map(placementSection => placementSection.id),
              ]),
            [],
          );

        return sectionsInScreen.some(sectionId => sectionId === id);
      })
      .sort((a, b) => getOrder(a, placements) - getOrder(b, placements));

    return (
      <View {...rootScreen.properties}>
        {sections.sort().map(section => (
          <SectionRenderer key={section.id} section={section} />
        ))}
        <Image
          source={{
            uri: 'https://wallpapers.com/images/hd/gol-linhas-aereas-above-the-clouds-w8xy3kgyz1rqk8g1.jpg',
          }}
        />
      </View>
    );
  }
};

const response: ServerResponse = {
  screen: {
    id: 'Root',
    wide: {},
    compact: {
      nav: {
        sections: [
          {
            id: 'Header',
          },
        ],
        order: 0,
      },
      main: {
        sections: [
          {
            id: 'Title',
          },
          {
            id: 'Description',
          },
          {
            id: 'Banner',
          },
        ],
        order: 1,
      },
    },
    properties: {
      style: {
        marginTop: 30,
        backgroundColor: '#605ab3',
        flex: 1,
      },
    },
  },
  sections: [
    {
      id: 'Header',
      sectionComponentType: 'View',
      children: [
        {
          id: 'HeaderTitle',
          sectionComponentType: 'Text',
          children: 'Server driven component - adonai',
          styles: {
            color: 'red',
            fontSize: 24,
          },
        },
      ],
      styles: {
        padding: 10,
        backgroundColor: 'white',
      },
    },
    {
      id: 'Title',
      sectionComponentType: 'Text',
      children: 'This is the Title',
      styles: {
        color: 'lime',
        fontSize: 48,
      },
    },
    {
      id: 'Description',
      sectionComponentType: 'Text',
      children: 'This is the Description',
      styles: {
        color: 'white',
        fontSize: 18,
        marginTop: 40,
      },
    },
    {
      id: 'Banner',
      sectionComponentType: 'Image',
      props: {
        source: {
          uri: 'https://wallpapers.com/images/hd/gol-linhas-aereas-above-the-clouds-w8xy3kgyz1rqk8g1.jpg',
        },
        resizeMode: 'cover',
      },
      styles: { width: '100%', height: 200 },
    },
  ],
};
