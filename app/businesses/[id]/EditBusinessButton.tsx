import Link from "next/link";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

const EditBusinessButton = ({ businessId }: { businessId: number }) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/businesses/edit/${businessId}`}>Edit</Link>
    </Button>
  );
};

export default EditBusinessButton;
