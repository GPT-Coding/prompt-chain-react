//src/components/__tests__/Hello.test.tsx

import { render } from '../../../tests/test-utils';
import HelloWrapper from '../Hello';
import { useHello } from '../../hooks/useHello';

// Mock the useHello hook
jest.mock('../../hooks/useHello');

const mockedUseHello = useHello as jest.Mock;

describe('HelloWrapper component', () => {
  it('renders fallback content and displays the content from Hello component', async () => {
    const mockHelloMsg = 'Hello, World!';

    mockedUseHello.mockImplementation(() => {
      return mockHelloMsg;
    });

    const { getByText } = render(<HelloWrapper />);

    expect(getByText(mockHelloMsg)).toBeInTheDocument();
  });
});
