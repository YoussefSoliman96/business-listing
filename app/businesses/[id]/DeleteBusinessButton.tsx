import { Button } from "@radix-ui/themes";
import React from "react";

const DeleteBusinessButton = ({ businessId }: { businessId: number }) => {
  return (
    <Button color="red" my="2">
      Delete
    </Button>
  );
};

export default DeleteBusinessButton;
