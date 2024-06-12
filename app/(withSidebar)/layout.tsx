"use client";

import Sidebar from "../_components/sidebar/Sidebar";
import RedirectContainer from "../_components/redirectContainer/RedirectContainer";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RedirectContainer>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </RedirectContainer>
  );
}
