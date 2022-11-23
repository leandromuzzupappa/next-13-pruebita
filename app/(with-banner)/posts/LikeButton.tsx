"use client";
import { useState } from "react";

export const LikeButton = () => {
  const [liked, setLiked] = useState<boolean>();

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "Unlike 💔" : "Like 💜"}
    </button>
  );
};
