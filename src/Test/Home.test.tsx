

/* eslint-disable testing-library/prefer-screen-queries */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Home from "../Home";


jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
 delete:jest.fn(() => Promise.resolve({ data: {} })),
 post: jest.fn(() => Promise.resolve({ data: {} }))
}))


describe("Home Component", () => {

  const queryClient = new QueryClient();

  const component = (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </QueryClientProvider>
  );




  test("Render component without crashing", () => {
    render(component);
  });
 ;
  test("Render component", () => {
    const { container } = render(component);
    expect(container).toBeTruthy();
  });

  test("to create snapshot", () => {
    const { asFragment } = render(component);
    expect(asFragment).toMatchSnapshot();
  });
});

