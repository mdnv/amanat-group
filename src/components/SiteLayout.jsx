import { Outlet } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)]">
      <div className="grain fixed inset-0 -z-10 opacity-30" />
      <SiteHeader />
      <div className="route-fade-in">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}

export default SiteLayout;
