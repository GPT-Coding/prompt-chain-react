import { Input } from 'antd';
import { useHelloName } from '../hooks/useHelloName';
export default () => {
  const { helloName, onHelloNameChange } = useHelloName();
  return (
    <div>
      请输入名字：<Input value={helloName} onChange={onHelloNameChange}></Input>
    </div>
  );
};
