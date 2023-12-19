import prisma from "@/prisma/client";
import { Badge, Table } from "@radix-ui/themes";
import { Link } from "@/app/components";
import NextLink from "next/link";
import BusinessActions from "./BusinessActions";
import { Business } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Pagination from "@/app/components/Pagination";

interface Props {
  searchParams: { orderBy: keyof Business; page: string };
}

const businessesPage = async ({ searchParams }: Props) => {
  const columns: {
    label: string;
    value: keyof Business;
    className?: string;
  }[] = [
    { label: "Business", value: "title" },
    { label: "Email", value: "email", className: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  ];

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 2;
  const businesses = await prisma.business.findMany({
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const businessCount = await prisma.business.count();

  return (
    <div>
      <BusinessActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}
              >
                <NextLink href={`/businesses/list?orderBy=${column.value}`}>
                  {column.label}
                </NextLink>
                {column.value === searchParams.orderBy && (
                  <ArrowUpIcon className="inline" />
                )}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {businesses.map((business) => (
            <Table.Row key={business.id}>
              <Table.Cell>
                <Link href={`/businesses/${business.id}`}>
                  {business.title}
                </Link>
                <div className="block md:hidden">{business.email}</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Badge color="gray">{business.email}</Badge>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {business.createdAt.toString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={businessCount}
      />
    </div>
  );
};

// export const revalidate = 0;
export const dynamic = "force-dynamic";

export default businessesPage;
