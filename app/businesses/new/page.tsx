"use client";
import dynamic from "next/dynamic";
import BusinessFormSkeleton from "./loading";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const BusinessForm = dynamic(
  () => import("@/app/businesses/_components/BusinessForm"),
  { ssr: false, loading: () => <BusinessFormSkeleton /> }
);

const NewBusinessPage = () => {
  const router = useRouter();
  return (
    <>
      <BusinessForm />
      <Button
        variant="soft"
        color="gray"
        my="3"
        onClick={() => router.push("/businesses")}
      >
        Cancel
      </Button>
    </>
  );
};

export default NewBusinessPage;
