import React from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";

const businessesPage = async () => {
  const businesses = await prisma.business.findMany();
  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="/businesses/new">New Business</Link>
        </Button>
      </div>
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
                {business.title}
                <div className="block md:hidden">email</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell"></Table.Cell>
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

export default businessesPage;
