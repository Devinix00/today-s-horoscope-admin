"use client";

import { PropsWithChildren } from "react";

interface SettingProps {
  settingHeader: string;
  settingFooterText?: string;
  onClick?: any;
}

function Setting({
  settingHeader,
  settingFooterText,
  onClick,
  children,
}: PropsWithChildren<SettingProps>) {
  return (
    <form className="mt-10 w-[500px]">
      <h2 className="w-full bg-gray-400 text-white px-4 py-2 font-semibold">
        {settingHeader}
      </h2>
      <section className="w-full h-28 flex justify-center items-center gap-4">
        {children}
      </section>

      <section className="w-full h-10 bg-gray-200 flex justify-end items-center ">
        <p className="mr-auto pl-4">{settingFooterText}</p>
        <button
          onClick={onClick}
          className="w-20 h-fit py-[2.5px] mr-1 rounded-md bg-blue-500 text-white"
        >
          적용
        </button>
      </section>
    </form>
  );
}

export default Setting;
