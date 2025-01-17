import { RouterProvider } from "react-router-dom";
import "./App.scss";
import "../src/style/global.scss";
import router from "./routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
