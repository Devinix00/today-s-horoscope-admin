"use client";

import Sidebar from "../_components/sidebar/Sidebar";
import RedirectContainer from "../_components/redirectContainer/RedirectContainer";
import useAutoRefresh from "../_hooks/useAutoRefresh";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAutoRefresh();
  return (
    <RedirectContainer>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </RedirectContainer>
  );
}
