"use server";

import { revalidatePath } from "next/cache";

export const deleteReviewAction = async (_: any, formData: FormData) => {
  const bookId = formData.get("bookId")?.toString();
  const reviewId = formData.get("reviewId")?.toString();

  if (!reviewId) {
    return {
      status: false,
      error: "삭제할 리뷰가 없습니다",
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_}/review/${reviewId}`);
    ({
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    revalidatePath(`reveiw-${reviewId}`);
    return {
      status: true,
      error: "",
    };
  } catch (err) {
    return {
      status: false,
      error: `리뷰삭제실패: ${err}`,
    };
  }
};
