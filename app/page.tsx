import LandingPage from "@/components/LandingPage";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export default function Home() {
  return <LandingPage />;
}
