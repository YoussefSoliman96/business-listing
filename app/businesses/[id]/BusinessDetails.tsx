import { Business } from "@prisma/client";
import { Heading, Flex, Badge, Card, Text, Box } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const BusinessDetails = ({ business }: { business: Business }) => {
  return (
    <>
      <Heading>{business.title}</Heading>
      <Flex className="gap-3" direction="column">
        <Box mt="2">
          <Badge color="blue" size="2" variant="soft">
            {business.email}
          </Badge>
        </Box>
        <Text>{business.createdAt.toString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="4">
        <ReactMarkdown>{business.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default BusinessDetails;
