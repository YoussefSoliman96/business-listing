import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import BusinessDetails from "../BusinessDetails";
import EditBusinessButton from "./EditBusinessButton";

interface Props {
  params: { id: string };
}

const BusinessDetailPage = async ({ params }: Props) => {
  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!business) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <BusinessDetails business={business} />
      </Box>
      <Box>
        <EditBusinessButton businessId={business.id} />
      </Box>
    </Grid>
  );
};

export default BusinessDetailPage;
