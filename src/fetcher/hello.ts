//src/fetcher/hello.ts

import FetchRequest from '../infra/fetchRequest';

interface HelloResponse {
  msg: string;
  timestamp: number;
  name: string;
}

export const fetchHelloData = async (name: string): Promise<HelloResponse> => {
  const fetchRequest = new FetchRequest();
  return await fetchRequest.get(`/hello/${name || 'empty'}`);
};
