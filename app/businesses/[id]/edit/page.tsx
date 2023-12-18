import prisma from "@/prisma/client";
import BusinessForm from "../../_components/BusinessForm";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const EditBusinessPage = async ({ params }: Props) => {
  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!business) notFound();

  return <BusinessForm business={business} />;
};

export default EditBusinessPage;
