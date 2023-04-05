import { selector, selectorFamily, useRecoilValue } from 'recoil';
import { fetchHelloData } from '../fetcher/hello';
import { helloNameAtom } from '../store/hello';

const helloMsgQuery = selectorFamily({
  key: 'helloMsgQuery',
  get: (name: string) => async () => {
    const result = await fetchHelloData(name || 'empty');
    return result;
  },
});

const currentHelloMsgQuery = selector({
  key: 'currentHelloMsgQuery',
  get: ({ get }) => {
    return get(helloMsgQuery(get(helloNameAtom)));
  },
});

export const useHello = () => {
  const { msg, name, timestamp } = useRecoilValue(currentHelloMsgQuery);
  return `Now is ${new Date(timestamp).toISOString()}, ${msg}, ${name}`;
};
