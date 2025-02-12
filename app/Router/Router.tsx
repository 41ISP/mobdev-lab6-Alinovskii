import { createBrowserRouter } from "react-router-dom";
import { URLs } from "../URL";
import _layout from "../_layout";
import HistoryPage from "../HistoryPage";

export const Router = createBrowserRouter([
    {
      path: URLs.main,
      element: <_layout/>,
    },
    {
      path: URLs.historyPage,
      element : <HistoryPage/>
    },
    ])