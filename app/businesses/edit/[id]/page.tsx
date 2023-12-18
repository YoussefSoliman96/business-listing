import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import BusinessFormSkeleton from "./loading";

import { Flex } from "@radix-ui/themes";
import CancelButton from "../../[id]/CancelButton";
import DeleteBusinessButton from "../../[id]/DeleteBusinessButton";

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
