import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <main className="min-h-screen w-full bg-background">
      <Outlet />
    </main>
  );
}
