import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}

const BusinessDetailPage = async ({ params }: Props) => {
  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!business) notFound();

  return (
    <div>
      <Heading>{business.title}</Heading>
      <Flex className="gap-3">
        <p>Email</p>
        <Text>{business.createdAt.toString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{business.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default BusinessDetailPage;
