import prisma from "@/prisma/client";
import { Badge, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const LatestBusinesses = async () => {
  const businesses = await prisma.business.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  return (
    <Card>
      <Heading size="4" mb="5">
        Latest Businesses
      </Heading>
      <Table.Root>
        <Table.Body>
          {businesses.map((business) => (
            <Table.Row key={business.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Link href={`/businesses/${business.id}`}>
                    {business.title}
                  </Link>
                  <Badge color="blue">{business.email}</Badge>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestBusinesses;
