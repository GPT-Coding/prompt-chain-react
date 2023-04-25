import {
  render,
  RenderOptions,
  renderHook,
  Queries,
  RenderHookOptions,
  queries,
} from '@testing-library/react';
import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <Suspense fallback={<h2>加载中……</h2>}>
        <BrowserRouter>{children}</BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook = <
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props, Q, Container, BaseElement>
) => renderHook(render, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, customRenderHook as renderHook };
