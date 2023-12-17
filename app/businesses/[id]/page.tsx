import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const BusinessDetailPage = async ({ params }: Props) => {
  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!business) notFound();

  return (
    <div>
      <p>{business.title}</p>
      <p>{business.description}</p>
      <p>{business.createdAt.toString()}</p>
    </div>
  );
};

export default BusinessDetailPage;
