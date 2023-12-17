import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const businessesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/businesses/new">New Business</Link>
      </Button>
    </div>
  );
};

export default businessesPage;
