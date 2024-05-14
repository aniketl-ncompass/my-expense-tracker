import { RouterProvider } from "react-router-dom";
import ExpenseRouter from "./ExpenseRouter";

function App() {
  return <RouterProvider router={ExpenseRouter} />;
}

export default App;
