import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { PATHNAMES } from "./consts";
import { SignInPage, DashboardPage, NotFoundPage } from "./pages";

import { AuthenticatedLayout, PageWithMenuLayout } from "./layouts";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={PATHNAMES.sign_in} element={<SignInPage />} />
        <Route element={<AuthenticatedLayout />}>
          <Route element={<PageWithMenuLayout />}>
            <Route path={PATHNAMES.dashboard} element={<DashboardPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
