import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import BusinessActions from "./BusinessActions";
import BusinessTable, { BusinessQuery, columnNames } from "./BusinessTable";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: BusinessQuery;
}

const businessesPage = async ({ searchParams }: Props) => {
  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const businesses = await prisma.business.findMany({
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const businessCount = await prisma.business.count();

  return (
    <Flex direction="column" gap="3">
      <BusinessActions />
      <BusinessTable searchParams={searchParams} businesses={businesses} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={businessCount}
      />
    </Flex>
  );
};

// export const revalidate = 0;
export const dynamic = "force-dynamic";

export default businessesPage;
