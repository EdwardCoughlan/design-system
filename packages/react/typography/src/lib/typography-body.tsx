import clsx from 'clsx';
import {
  AllHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
  type ElementType as ReactElementType,
} from 'react';

export type TypographyBody = {
  as: 'span' | 'p' | 'a' | 'em' | 'strong' | 'li' | 'div';
  level: 'body-lead' | 'body-md' | 'body-sm' | 'body-xs';
} & DetailedHTMLProps<
  AllHTMLAttributes<
    | HTMLParagraphElement
    | HTMLSpanElement
    | HTMLAnchorElement
    | HTMLUListElement
    | HTMLDivElement
  >,
  never
>;

export const TypographyBody: FC<PropsWithChildren<TypographyBody>> = ({
  as,
  level,
  children,
  ...props
}) => {
  if (as === 'div') {
    return (
      <div
        {...(props as DetailedHTMLProps<
          AllHTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >)}
      >
        {children}
      </div>
    );
  }
  const ElementType: ReactElementType = as;

  return (
    <ElementType
      className={clsx({
        'text-body-lead': level === 'body-lead',
        'text-body-md': level === 'body-md',
        'text-body-sm': level === 'body-sm',
        'text-body-xs': level === 'body-xs',
      })}
      {...props}
    >
      {children}
    </ElementType>
  );
};
