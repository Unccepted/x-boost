import { Route, Routes } from "react-router-dom";

import { Page_404 as NotFoundPage } from "./components/Page_404";

import Main from "./components/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path={`*`} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
