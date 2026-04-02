import { Layout, Section, ServerResponse } from './types';
import { SectionRenderer } from './section-renderer';
import { View } from 'react-native';

const getOrder = (section: Section, placements: Array<Layout[string]>) => {
  return (
    placements.find(({ sections }) =>
      sections.some(({ id }) => id === section.id),
    )?.order ?? 0
  );
};

export const ServerDrivenUi = () => {
  // Aqui o screen name ("Root") pode ser dinamico, variando o que renderiza para cada screen
  const rootScreen = response.screens.find(({ id }) => id === 'Root');

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
      </View>
    );
  }
};

const response: ServerResponse = {
  screens: [
    {
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
          ],
          order: 1,
        },
      },
      properties: {
        style: {
          marginTop: 60,
          backgroundColor: '#605ab3',
          flex: 1,
        },
      },
    },
  ],
  sections: [
    {
      id: 'Header',
      sectionComponentType: 'View',
      children: [
        {
          id: 'HeaderTitle',
          sectionComponentType: 'Text',
          children: 'Server driven component',
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
  ],
};
