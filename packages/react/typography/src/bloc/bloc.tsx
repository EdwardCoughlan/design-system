import {
  type FC,
  createContext,
  type PropsWithChildren,
  useContext,
  Suspense,
  lazy,
} from 'react';
import BlocStorage from './blocStorage';
import type { ComponentMapper, ComponentMapperType } from './types';

export type BlocProps = {
  id: string;
  props?: Record<string | number | symbol, unknown>;
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
  const ComponentMapper =
    componentMappers && componentMappers[identifier]
      ? componentMappers[identifier]
      : bc.getComponent(identifier);

  if (ComponentMapper === undefined) {
    console.error(
      `Component not added to component mapper ${identifier}. Try adding it or creating it.`
    );
    return null;
  }

  const componentProps =
    ComponentMapper.mapper === undefined
      ? props
      : ComponentMapper.mapper(props);

  if (ComponentMapper.type === 'lazy') {
    return (
      <Suspense fallback={ComponentMapper.loader} key={id}>
        <ComponentMapper.Component key={id} {...(componentProps || {})} />
      </Suspense>
    );
  }
  return <ComponentMapper.Component key={id} {...(componentProps || {})} />;
};

export const BlocProvider: FC<
  PropsWithChildren<{ componentMappers: Map<string, ComponentMapper> }>
> = ({ children, componentMappers }) => {
  componentMappers.forEach((cm, key) => BlocStorage.registerComponent(key, cm));
  return (
    <BlocContext.Provider value={BlocStorage}>{children}</BlocContext.Provider>
  );
};
