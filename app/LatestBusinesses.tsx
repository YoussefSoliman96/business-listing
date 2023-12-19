import prisma from "@/prisma/client";
import { Badge, Box, Card, Flex, Heading, Table } from "@radix-ui/themes";
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
                  <Flex direction="column" align="start" gap="3">
                    <Link href={`/businesses/${business.id}`}>
                      {business.title}
                    </Link>
                    <Box>
                      <Badge color="blue">{business.email}</Badge>
                    </Box>
                  </Flex>
                  <Badge color="gray">
                    {business.createdAt.toDateString()}
                  </Badge>
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
