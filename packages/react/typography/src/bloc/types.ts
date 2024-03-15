/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FunctionComponent, ComponentClass } from 'react';

export type ComponentMapperType = {
  [key: string]: ComponentMapper;
};

export type ComponentMapper = {
  component: FunctionComponent<any> | ComponentClass<any>; // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mapper?: (props?: any) => any;
};
