import { Route, Routes } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { AuthLayout } from "../layouts/AuthLayout";
import { LoginPage } from "@/pages/login";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
