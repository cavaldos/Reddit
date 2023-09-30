"use client";

import { useParams } from "next/navigation";
const GroupPage: React.FC = () => {
  const { group } = useParams<{ group: string }>();
  return <div>{group}</div>;
};

export default GroupPage;
