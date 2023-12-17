import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const BusinessActions = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/businesses/new">New Business</Link>
      </Button>
    </div>
  );
};

export default BusinessActions;
