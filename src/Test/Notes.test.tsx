

/* eslint-disable testing-library/prefer-screen-queries */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Notes } from "../Notes";


jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
 delete:jest.fn(() => Promise.resolve({ data: {} })),
 post: jest.fn(() => Promise.resolve({ data: {} }))
}))


describe("Notes Component", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })


  const queryClient = new QueryClient();

  const component = (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Notes />
      </BrowserRouter>
    </QueryClientProvider>
  );


  test('renders loading state', () => {
    jest.requireMock('@tanstack/react-query').useQuery.mockReturnValueOnce({ isLoading: true });
    render(component);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })


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


