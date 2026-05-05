import { lazy, Suspense } from 'react';
import { Section } from './types';
import { ActivityIndicator } from 'react-native';
import { useCustomProps } from './hooks/use-custom-props';

interface SectionRendererProps {
  section: Section;
}

export const SectionRenderer = ({ section }: SectionRendererProps) => {
  const customProps = useCustomProps(section);

  const Import = lazy(() =>
    import('@components').then(module => ({
      default: module[section.sectionComponentType],
    })),
  );

  if (Array.isArray(section.children)) {
    return (
      <Suspense fallback={<ActivityIndicator />}>
        <Import key={section.id} {...section.props} {...customProps}>
          {section.children.map(child => (
            <SectionRenderer key={child.id} section={child} />
          ))}
        </Import>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<ActivityIndicator />}>
      <Import key={section.id} {...section.props}>
        {section.children}
      </Import>
    </Suspense>
  );
};
