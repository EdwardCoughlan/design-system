import type {
  FunctionComponent,
  ComponentClass,
  ExoticComponent,
  ReactElement,
} from 'react';

export type ComponentMapperType = {
  [key: string]: ComponentMapper;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentMapper<T = any> = {
  type: 'default' | 'lazy';
  loader?: ReactElement | string | number;
  mapper?: (props?: T) => T;
} & (
  | {
      type: 'default';
      Component: FunctionComponent<T> | ComponentClass<T>;
    }
  | {
      type: 'lazy';
      Component: ExoticComponent<T>;
      loader: ReactElement | string | number;
    }
);
