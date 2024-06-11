"use client";

import React from "react";
import useFunctionStore from "../../../_stores/useFucntionStore";
import routes from "../../../_constants/routes";
import { useRouter } from "next/navigation";

interface ShortcutsButtonProps {
  type: string;
}

function ShortcutsButton({ type }: ShortcutsButtonProps) {
  const { setIsOpenedFunction } = useFunctionStore();
  const router = useRouter();

  const handleClick = () => {
    setIsOpenedFunction(true);

    switch (type) {
      case routes.PUSH_MESSAGE:
        router.push(routes.PUSH_MESSAGE);
        break;

      case routes.CONTENTS_SETTING:
        router.push(routes.CONTENTS_SETTING);
        break;

      case routes.CONTENTS_DB:
        router.push(routes.CONTENTS_DB);
        break;

      default:
        break;
    }
  };
  return (
    <button
      onClick={handleClick}
      className="w-24 h-8 flex justify-center items-center bg-blue-500 text-white rounded-md"
    >
      바로가기
    </button>
  );
}

export default ShortcutsButton;
