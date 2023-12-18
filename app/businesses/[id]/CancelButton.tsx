"use client";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const CancelButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="soft"
      color="gray"
      my="3"
      onClick={() => router.push("/businesses/list")}
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
