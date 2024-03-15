import type { FunctionComponent, ComponentClass } from 'react';

export type ComponentMapperType = {
  [key: string]: ComponentMapper;
};

export type ComponentMapper = {
  component:
    | FunctionComponent<NonNullable<unknown>>
    | ComponentClass<NonNullable<unknown>>;
  mapper?: (props: NonNullable<unknown>) => NonNullable<unknown>;
};
