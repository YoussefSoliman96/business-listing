import { Business } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table, Badge } from "@radix-ui/themes";
import Link from "next/link";
import NextLink from "next/link";
import React from "react";

export interface BusinessQuery {
  orderBy: keyof Business;
  page: string;
}

interface Props {
  searchParams: BusinessQuery;
  businesses: Business[];
}

const BusinessTable = ({ searchParams, businesses }: Props) => {
  return (
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
              <Link href={`/businesses/${business.id}`}>{business.title}</Link>
              <div className="block md:hidden">{business.email}</div>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Badge color="gray">{business.email}</Badge>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {business.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

const columns: {
  label: string;
  value: keyof Business;
  className?: string;
}[] = [
  { label: "Business", value: "title" },
  { label: "Email", value: "email", className: "hidden md:table-cell" },
  { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
];

export const columnNames = columns.map((column) => column.value);

export default BusinessTable;
