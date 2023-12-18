import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import BusinessDetails from "../BusinessDetails";
import EditBusinessButton from "./EditBusinessButton";
import DeleteBusinessButton from "./DeleteBusinessButton";

interface Props {
  params: { id: string };
}

const BusinessDetailPage = async ({ params }: Props) => {
  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!business) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5", xl: "8" }} gap="5">
      <Box className="md:col-span-4">
        <BusinessDetails business={business} />
      </Box>
      <Box>
        <Flex direction="column">
          <EditBusinessButton businessId={business.id} />
          <DeleteBusinessButton businessId={business.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default BusinessDetailPage;
