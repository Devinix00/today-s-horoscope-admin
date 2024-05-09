"use client";

import LoginInput from "./LoginInput";
import useLogin from "../../_hooks/useLogin";

function LoginForm() {
  const { handleSubmit, register, onSubmit } = useLogin();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[100%] flex flex-col mt-[50px]"
    >
      <section className="flex flex-col gap-[10px]">
        <LoginInput
          register={register}
          name="admin_id"
          type="text"
          placeholder="아이디"
        />
        <LoginInput
          name="admin_pw"
          register={register}
          type="password"
          placeholder="비밀번호"
        />
      </section>
      <button
        type="submit"
        className="flex justify-center items-center bg-blue-400 text-white h-[55px] mt-4 rounded-lg text-lg"
      >
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
