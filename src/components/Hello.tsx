//src/components/Hello.tsx

import { Suspense } from 'react';
import { useHello } from '../hooks/useHello';

const Hello = () => {
  const helloMsg = useHello();
  return <h2>{helloMsg}</h2>;
};

export default () => {
  return (
    <Suspense fallback={<h2>加载中……</h2>}>
      <Hello />
    </Suspense>
  );
};
