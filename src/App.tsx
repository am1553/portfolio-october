import RootLayout from "./layout/RootLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
}

export default App;
