/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  createElement,
  type FC,
  createContext,
  type PropsWithChildren,
  useContext,
} from 'react';
import BlocStorage from './blocStorage';
import type { ComponentMapper, ComponentMapperType } from './types';

export type BlocProps = {
  id: string;
  props?: unknown;
  identifier: string;
  componentMappers?: ComponentMapperType;
};

const BlocContext = createContext(BlocStorage);

export const Bloc: FC<BlocProps> = ({
  id,
  identifier,
  props,
  componentMappers,
}: BlocProps) => {
  const bc = useContext(BlocContext);
  const componentMapper =
    componentMappers && componentMappers[identifier]
      ? componentMappers[identifier]
      : bc.getComponent(identifier);

  if (componentMapper === undefined) {
    console.error(
      `Component not added to component mapper ${identifier}. Try adding it or creating it.`
    );
    return null;
  }

  const componentProps =
    componentMapper.mapper === undefined
      ? props
      : componentMapper.mapper(props || {});

  componentMapper.component.displayName = identifier;
  const Component = componentMapper.component;

  return <Component key={id} {...(componentProps || {})} />;
};

export const BlocProvider: FC<
  PropsWithChildren<{ componentMappers: Map<string, ComponentMapper> }>
> = ({ children, componentMappers }) => {
  componentMappers.forEach((cm, key) => BlocStorage.registerComponent(key, cm));
  return (
    <BlocContext.Provider value={BlocStorage}>{children}</BlocContext.Provider>
  );
};
