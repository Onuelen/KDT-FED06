"use client";

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다 !</h3>
      <button
        onClick={() => {
          router.refresh();
          reset();
        }}
      >
        에러 해결!!!!
      </button>
      현재 페이지에 대한 필요한
    </div>
  );
};

export default Error;
