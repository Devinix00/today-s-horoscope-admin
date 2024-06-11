"use client";

import Link from "next/link";
import React from "react";
import routes from "../../../_constants/routes";
import useFunctionStore from "../../../_stores/useFucntionStore";
import { useRouter } from "next/navigation";

interface ShortcutsLinkProps {
  href: string;
  type?: string;
}

function ShortcutsLink({ href, type }: ShortcutsLinkProps) {
  const { setIsOpenedFunction } = useFunctionStore();
  const router = useRouter();

  const handleClick = () => {
    if (type === routes.CONTENTS_DB) {
      setIsOpenedFunction(true);
      router.push(routes.CONTENTS_DB);
    }
  };

  return (
    <>
      {type === routes.CONTENTS_DB ? (
        <button
          onClick={handleClick}
          className="absolute bottom-4 right-4 w-24 h-8 flex justify-center items-center bg-blue-500 text-white rounded-md"
        >
          바로 가기
        </button>
      ) : (
        <Link
          href={href}
          className="absolute bottom-4 right-4 w-24 h-8 flex justify-center items-center bg-blue-500 text-white rounded-md"
        >
          바로 가기
        </Link>
      )}
    </>
  );
}

export default ShortcutsLink;
