import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

export type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  level: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
} & React.DetailedHTMLProps<
  React.AllHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const TypograhpyHeading: FC<PropsWithChildren<HeadingProps>> = ({
  as,
  children,
  level,
  ...props
}) => {
  const ElementType: React.ElementType = as;

  if (as === 'div') {
    return (
      <div
        role="heading"
        className={clsx({
          'text-heading-2xl': level === '2xl',
          'text-heading-xl': level === 'xl',
          'text-heading-lg': level === 'lg',
          'text-heading-md': level === 'md',
          'text-heading-sm': level === 'sm',
          'text-heading-xs': level === 'xs',
        })}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <ElementType
      className={clsx({
        'text-heading-2xl': level === '2xl',
        'text-heading-xl': level === 'xl',
        'text-heading-lg': level === 'lg',
        'text-heading-md': level === 'md',
        'text-heading-sm': level === 'sm',
        'text-heading-xs': level === 'xs',
      })}
      {...props}
    >
      {children}
    </ElementType>
  );
};

export default TypograhpyHeading;
