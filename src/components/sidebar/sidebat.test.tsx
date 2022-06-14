import { createMemoryHistory, Router } from "@tanstack/react-location";
import "@testing-library/jest-dom";
import { getByText, render, screen, userEvent } from "../../utils/test";
import Sidebar from "./Sidebar";
// import { Input } from "./Input";
const createRouterWrapper =
  //   (history): React.ComponentType =>
  //   ({ children }) =>
  //     <Router history={history}>{children}</Router>;

  describe("SideBar", () => {
    it("should render the input", () => {
      // const settings = screen.getByText("Settings");
      // expect(settings).toBeInTheDocument();
    });
  });

//   const history = createMemoryHistory();
//   render(<Sidebar />, { wrapper: createRouterWrapper(history) });
