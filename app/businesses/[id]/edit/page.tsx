import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import BusinessFormSkeleton from "./loading";
import DeleteBusinessButton from "../DeleteBusinessButton";
import CancelButton from "../../_components/CancelButton";
import { Flex } from "@radix-ui/themes";

const BusinessForm = dynamic(
  () => import("@/app/businesses/_components/BusinessForm"),
  {
    ssr: false,
    loading: () => <BusinessFormSkeleton />,
  }
);

interface Props {
  params: { id: string };
}

const EditBusinessPage = async ({ params }: Props) => {
  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!business) notFound();

  return (
    <>
      <BusinessForm business={business} />
      <Flex direction="column" width="9">
        <CancelButton />
        <DeleteBusinessButton businessId={business.id} />
      </Flex>
    </>
  );
};

export default EditBusinessPage;
