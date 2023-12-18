import dynamic from "next/dynamic";
import BusinessFormSkeleton from "./loading";

const BusinessForm = dynamic(
  () => import("@/app/businesses/_components/BusinessForm"),
  { ssr: false, loading: () => <BusinessFormSkeleton /> }
);

const NewBusinessPage = () => {
  return <BusinessForm />;
};

export default NewBusinessPage;
