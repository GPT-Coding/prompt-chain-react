import { act, renderHook } from '../../../tests/test-utils';
import { useHelloName } from '../useHelloName';
import { ChangeEvent } from 'react';

describe('useHelloName hook', () => {
  it('should update helloNameAtom on input change event', () => {
    // Render the useHelloName hook
    const { result } = renderHook(() => useHelloName());

    // Mock an input change event
    const event = {
      target: {
        value: 'John',
      },
    };

    // Call the onHelloNameChange event handler with the mock event
    act(() => {
      result.current.onHelloNameChange(event as ChangeEvent<HTMLInputElement>);
    });

    // Test if the helloNameAtom has been updated with the new value

    expect(result.current.helloName).toEqual('John');
  });
});
