"use client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/global.css";
import ReactQueryProvider from "./_react-query/ReactQueryProvider";
import Header from "./_components/header/Header";
import { ReactNode, useEffect, useState } from "react";
import useAutoRefresh from "./_hooks/useAutoRefresh";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
  types: ReactNode;
}) {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  useAutoRefresh();

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {mount && (
            <div className="text-[#686868]">
              <Header />
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </div>
          )}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
