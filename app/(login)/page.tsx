"use client";

import { useEffect } from "react";
import useLoggedInStore from "../_stores/useLoggedInStore";
import LoginForm from "./_components/LoginForm";
import { useRouter } from "next/navigation";
import routes from "../_constants/routes";

function Login() {
  const { loggedIn } = useLoggedInStore();
  const router = useRouter();
  useEffect(() => {
    if (loggedIn) router.push(routes.HOME);
  }, [loggedIn, router]);

  return (
    <>
      {loggedIn ? (
        <div className="w-full min-h-[100vh] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <p className="text-2xl">Loading...</p>
        </div>
      ) : (
        <div className="bg-[#f8f8f8] min-h-[calc(100vh-150px)] flex justify-center items-center">
          <div className="w-[384px] flex flex-col justify-center items-center mb-24">
            <h1 className="text-black text-[28px] font-semibold">
              관리자 로그인
            </h1>
            <LoginForm />
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
