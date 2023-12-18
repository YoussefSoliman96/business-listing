import dynamic from "next/dynamic";
import BusinessFormSkeleton from "./loading";
import CancelButton from "../[id]/CancelButton";

const BusinessForm = dynamic(
  () => import("@/app/businesses/_components/BusinessForm"),
  { ssr: false, loading: () => <BusinessFormSkeleton /> }
);

const NewBusinessPage = () => {
  return (
    <>
      <BusinessForm />
      <CancelButton />
    </>
  );
};

export default NewBusinessPage;
