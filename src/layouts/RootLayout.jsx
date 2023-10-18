import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="mt-2">
        <nav>
          <h1 className="text-2xl font-bold">Another Landing</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          {/* <NavLink to="help">Help</NavLink> */}
          <NavLink to="careers">Coming Soon</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
