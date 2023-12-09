import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/AuthPage/AuthPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";

import ParentPage from "./pages/ParentPage/ParentPage";
import ProtectRoute from "./UI/ProtectRoute";
import TeacherPage from "./pages/TeacherPage/TeacherPage";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import ParentProfile from "components/Parent/ParentProfile/ParentProfile";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools client={queryClient} initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectRoute>
                <Login />
              </ProtectRoute>
            }
          />
          <Route
            path="parent"
            element={
              <ProtectRoute>
                <ParentPage />
              </ProtectRoute>
            }
          />
          <Route
            path="teacher"
            element={
              <ProtectRoute>
                <TeacherPage />
              </ProtectRoute>
            }
          />
          <Route path="parent/:profile" element={<ParentProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
