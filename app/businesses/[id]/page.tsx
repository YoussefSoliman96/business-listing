import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import BusinessDetails from "./BusinessDetails";
import EditBusinessButton from "./EditBusinessButton";
import DeleteBusinessButton from "./DeleteBusinessButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import { NextResponse } from "next/server";
import { cache } from "react";

interface Props {
  params: { id: string };
}

const fetchBusiness = cache((businessId: number) =>
  prisma.business.findUnique({ where: { id: businessId } })
);

const BusinessDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const business = await fetchBusiness(parseInt(params.id));

  const currentUserEmail = session?.user?.email;

  if (!business) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5", xl: "8" }} gap="5">
      <Box className="md:col-span-4">
        <BusinessDetails business={business} />
      </Box>
      {currentUserEmail === business.email && (
        <Box>
          <Flex direction="column" gap="2">
            <EditBusinessButton businessId={business.id} />
            <DeleteBusinessButton businessId={business.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export async function generateMetadata({ params }: Props) {
  const business = await fetchBusiness(parseInt(params.id));
  return {
    title: business?.title,
    description: "Details of business " + business?.id,
  };
}

export default BusinessDetailPage;
