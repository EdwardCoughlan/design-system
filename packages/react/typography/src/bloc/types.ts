/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  FunctionComponent,
  ComponentClass,
  ExoticComponent,
  ReactElement,
} from 'react';

export type ComponentMapperType = {
  [key: string]: ComponentMapper;
};

export type ComponentMapper =
  | {
      Component: FunctionComponent<any> | ComponentClass<any>;
      mapper?: (props?: any) => any;
    }
  | {
      Component: ExoticComponent<any>;
      mapper?: (props?: any) => any;
      loader: ReactElement | string | number;
    };
