import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const BusinessActions = () => {
  return (
    <Flex justify="between">
      <Button>
        <Link href="/businesses/new">New Business</Link>
      </Button>
    </Flex>
  );
};

export default BusinessActions;
