import { Business } from "@prisma/client";
import { Heading, Flex, Badge, Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const BusinessDetails = ({ business }: { business: Business }) => {
  return (
    <>
      <Heading>{business.title}</Heading>
      <Flex className="gap-3">
        <Badge color="blue">Email</Badge>
        <Text>{business.createdAt.toString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="4">
        <ReactMarkdown>{business.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default BusinessDetails;
