"use client";

import { useParams } from "next/navigation";



const UserPage: React.FC = () => {
  const { user } = useParams<{ user: string }>();
  return <div>{user}</div>;
};



export default UserPage;