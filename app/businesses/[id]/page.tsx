import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import BusinessDetails from "./BusinessDetails";
import EditBusinessButton from "./EditBusinessButton";
import DeleteBusinessButton from "./DeleteBusinessButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import { NextResponse } from "next/server";

interface Props {
  params: { id: string };
}

const BusinessDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);

  const currentUserEmail = session?.user?.email;

  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!business) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5", xl: "8" }} gap="5">
      <Box className="md:col-span-4">
        <BusinessDetails business={business} />
      </Box>
      {currentUserEmail === business.email && (
        <Box>
          <Flex direction="column">
            <EditBusinessButton businessId={business.id} />
            <DeleteBusinessButton businessId={business.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default BusinessDetailPage;
