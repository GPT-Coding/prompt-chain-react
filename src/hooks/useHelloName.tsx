import { ChangeEvent, startTransition } from 'react';
import { helloNameAtom } from '../store/hello';
import { useRecoilState } from 'recoil';

export const useHelloName = () => {
  const [helloName, setHelloName] = useRecoilState(helloNameAtom);
  return {
    helloName,
    onHelloNameChange: (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setHelloName(newValue);
    },
  };
};
