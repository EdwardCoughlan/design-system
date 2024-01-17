import { TypograhpyHeading } from '@edwardcoughlan/design-system-typography';
/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <div className={'bg-black text-white text-heading-sm my-50'}>
      <TypograhpyHeading as={'h1'} level={'2xl'}>
        Welcome to Button!
      </TypograhpyHeading>
      <div className="p-50">hello</div>
    </div>
  );
}

export default Button;
