"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const newBusinessPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Desciption"></TextArea>
      <Button>Submit New Business</Button>
    </div>
  );
};

export default newBusinessPage;
