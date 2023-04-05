import { Input } from 'antd';
import { useHelloName } from '../hooks/useHelloName';
export default () => {
  const { helloName, onHelloNameChange } = useHelloName();
  return (
    <div>
      <label>
        请输入名字：
        <Input
          value={helloName}
          onChange={onHelloNameChange}
          style={{ width: '320px' }}
        ></Input>
      </label>
    </div>
  );
};
