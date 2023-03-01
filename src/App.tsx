import AppRoutes from "./app-routes";
import { AppProvider } from "./providers";

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
