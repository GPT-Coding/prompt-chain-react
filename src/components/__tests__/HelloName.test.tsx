import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloName from '../HelloName';
import { useHelloName } from '../../hooks/useHelloName';

// Mock the useHelloName hook
jest.mock('../../hooks/useHelloName');

const mockedUseHelloName = useHelloName as jest.Mock;

describe('HelloName component', () => {
  it('renders input and displays the value from useHelloName hook', () => {
    const mockHelloName = 'John Doe';
    const mockOnHelloNameChange = jest.fn();

    mockedUseHelloName.mockReturnValue({
      helloName: mockHelloName,
      onHelloNameChange: mockOnHelloNameChange,
    });

    const { getByLabelText, getByDisplayValue } = render(<HelloName />);

    const inputElement = getByLabelText(/请输入名字/i);

    expect(inputElement).toBeInTheDocument();
    expect(getByDisplayValue(mockHelloName)).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'Jane Doe' } });

    expect(mockOnHelloNameChange).toHaveBeenCalled();
  });
});
