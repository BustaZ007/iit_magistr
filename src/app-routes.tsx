import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { PATHNAMES } from "./consts";
import { SignInPage, NotFoundPage, HomePage } from "./pages";

import { AuthenticatedLayout, PageWithMenuLayout } from "./layouts";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={PATHNAMES.sign_in} element={<SignInPage />} />
        <Route element={<AuthenticatedLayout />}>
          <Route element={<PageWithMenuLayout />}>
            <Route path={PATHNAMES.dashboard} element={<HomePage />} />
            <Route path="/test" element={<HomePage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
