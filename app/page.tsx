import { Metadata } from "next";
import LatestBusinesses from "./LatestBusinesses";

export default function Home({}) {
  return <LatestBusinesses />;
}

export const metadata: Metadata = {
  title: "Business Manager - Dashboard",
  description: "View the latest businesses",
};
