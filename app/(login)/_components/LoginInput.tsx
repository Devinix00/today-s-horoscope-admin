"use client";

import React, { useEffect, useRef } from "react";
import { UseFormRegister } from "react-hook-form";

interface LoginInputProps {
  register: UseFormRegister<LoginInputValues>;
  name: "admin_id" | "admin_pw";
  type: "text" | "password";
  placeholder: "아이디" | "비밀번호";
}

function LoginInput({ type, name, placeholder, register }: LoginInputProps) {
  return (
    <input
      {...register(name, { required: true })}
      type={type}
      placeholder={placeholder}
      className="h-[55px] px-4 outline-none rounded-lg"
    />
  );
}

export default LoginInput;
