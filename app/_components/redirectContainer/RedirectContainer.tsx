"use client";

import React, { PropsWithChildren, useEffect } from "react";
import useLoggedInStore from "../../_stores/useLoggedInStore";
import { useRouter } from "next/navigation";
import routes from "../../_constants/routes";

function RedirectContainer({ children }: PropsWithChildren) {
  const { loggedIn } = useLoggedInStore();
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) router.push(routes.LOGIN);
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}

export default RedirectContainer;
