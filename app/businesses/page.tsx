import prisma from "@/prisma/client";
import { Badge, Table } from "@radix-ui/themes";
import { Link } from "@/app/components";
import BusinessActions from "./BusinessActions";

const businessesPage = async () => {
  const businesses = await prisma.business.findMany();

  return (
    <div>
      <BusinessActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Business</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Owner Email
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {businesses.map((business) => (
            <Table.Row key={business.id}>
              <Table.Cell>
                <Link href={`/businesses/${business.id}`}>
                  {business.title}
                </Link>
                <div className="block md:hidden">email</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Badge>Email</Badge>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {business.createdAt.toString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

// export const revalidate = 0;
export const dynamic = "force-dynamic";

export default businessesPage;
