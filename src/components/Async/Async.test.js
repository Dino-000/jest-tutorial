import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  //async: create an ansynchronus test ( like calling an api and render )
  test("render posts if the request succeeds", async () => {
    render(<Async />);

    //create an dummy api
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });

    //await: all of below code is delayed until the wait statement finish
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
