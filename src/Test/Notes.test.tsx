import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Notes } from "../Notes";
import { deleteNotes } from "../API";

jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
  delete: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock("../API", () => ({
  deleteNotes: jest.fn(),
}));

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
  useMutation: jest.fn(() => ({
    mutate: jest.fn(),
  })),
}));

describe("Notes Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useQuery as jest.Mock).mockReturnValue({ isLoading: false })
    
  });

  const queryClient = new QueryClient();

  const component = (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Notes />
      </BrowserRouter>
    </QueryClientProvider>
  );

  test("renders loading state", () => {
    (useQuery as jest.Mock).mockReturnValue({ isLoading: true });
    render(component);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("Render component without crashing", () => {
    render(component);
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
