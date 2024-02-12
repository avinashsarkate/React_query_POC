/* eslint-disable testing-library/prefer-screen-queries */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NewNotes from "../NewNotes";
import { fireEvent, render } from "@testing-library/react";


jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
 
}))


describe("NewNotes Component", () => {
  const queryClient = new QueryClient();

  const component = (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NewNotes />
      </BrowserRouter>
    </QueryClientProvider>
  );

  test("Render component without crashing", () => {
    render(component);
  });

  test("to handle the user Input", () => {
    const { getByPlaceholderText } = render(component);

    expect(getByPlaceholderText("Title")).toBeTruthy();
    expect(getByPlaceholderText("Description")).toBeTruthy();
    
  });
  test("Render component", () => {
    const { container } = render(component);
    expect(container).toBeTruthy();
  });

  test("to create snapshot", () => {
    const { asFragment } = render(component);
    expect(asFragment).toMatchSnapshot();
  });
});
