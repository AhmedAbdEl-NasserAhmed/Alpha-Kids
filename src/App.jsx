import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Login from "./pages/AuthPage/AuthPage";
import ProtectRoute from "./UI/ProtectRoute";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import ParentProfile from "Features/Parent/ParentProfile/ParentProfile";
import LandingPageLayout from "pages/LandingPageLayout/LandingPageLayout";
import Workshops from "pages/WorkshopsPage/WorkshopsPage";
import GamesPage from "pages/GamesPage/GamesPage";
import VideosPage from "pages/VideosPage/VideosPage";
import SelectedVideoPage from "pages/SelectedVideoPage/SelectedVideoPage";
import SelectedGamePage from "pages/SelectedGamePage/SelectedGamePage";
import TeacherProfile from "Features/Teacher/TeacherProfile/TeacherProfile";
import WorkshopExamPage from "pages/WorkshopLessonsPage/WorkshopLessonsPage";
import HomePage from "./pages/HomePage/HomePage";

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

          <Route element={<LandingPageLayout />}>
            <Route
              path="/parent"
              element={
                <ProtectRoute>
                  <HomePage />
                </ProtectRoute>
              }
            />

            <Route
              path="/teacher"
              element={
                <ProtectRoute>
                  <HomePage />
                </ProtectRoute>
              }
            />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/videos/:src" element={<SelectedVideoPage />} />
            <Route path="/games/:src" element={<SelectedGamePage />} />
            <Route path="workshops/:id" element={<WorkshopExamPage />} />
          </Route>
          <Route path="parent/profile" element={<ParentProfile />} />
          <Route path="teacher/profile" element={<TeacherProfile />} />

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
