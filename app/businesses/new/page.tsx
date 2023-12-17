"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface BusinessForm {
  title: string;
  description: string;
}

const newBusinessPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<BusinessForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/businesses", data);
        router.push("/businesses");
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Desciption" {...field}></SimpleMDE>
        )}
      />
      <Button>Submit New Business</Button>
    </form>
  );
};

export default newBusinessPage;
