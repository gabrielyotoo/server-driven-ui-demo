import { lazy, Suspense } from 'react';
import { Section } from './types';
import { ActivityIndicator } from 'react-native';

interface SectionRendererProps {
  section: Section;
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  const Import = lazy(() =>
    import('@components').then(module => ({
      default: module[section.sectionComponentType],
    })),
  );

  if (typeof section.children === 'object') {
    return (
      <Suspense fallback={<ActivityIndicator />}>
        <Import key={section.id} style={section.styles}>
          {section.children.map(child => (
            <SectionRenderer key={child.id} section={child} />
          ))}
        </Import>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Import key={section.id} style={section.styles} {...section.props}>
        {section.children}
      </Import>
    </Suspense>
  );
};
