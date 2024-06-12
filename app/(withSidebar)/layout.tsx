"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../_components/sidebar/Sidebar";
import RedirectContainer from "../_components/redirectContainer/RedirectContainer";

export default function WithSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  return (
    // <RedirectContainer>
    <div className="flex">
      {mount && (
        <>
          <Sidebar />
          {children}
        </>
      )}
    </div>
    // </RedirectContainer>
  );
}
