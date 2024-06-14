"use client";

import { useEffect } from "react";

import LoginForm from "./_components/LoginForm";
import { useRouter } from "next/navigation";
import useLoggedInStore from "../_stores/useLoggedInStore";
import tokenManager from "../_utils/tokenManager";
import userAPI from "../_services/user/api";
import routes from "../_constants/routes";

function Login() {
  const { loggedIn, setLoggedIn } = useLoggedInStore();
  const router = useRouter();

  useEffect(() => {
    const refresh = async () => {
      if (loggedIn) {
        const { refreshToken, setAccessToken } = tokenManager();
        const { data, response } = await userAPI.refreshAPI(refreshToken);
        if (response.ok) {
          setAccessToken(data?.access);
          setTimeout(() => {
            router.push(routes.HOME);
          }, 500);
        } else if (response.status === 401) {
          setLoggedIn(false);
          return alert("토큰이 만료되었습니다. 다시 로그인 해주세요");
        }
      }
    };

    refresh();
  }, [loggedIn, router, setLoggedIn]);

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
