import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { businessSchema } from "../../validationSchemas";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();

  const validation = businessSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newBusiness = await prisma.business.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newBusiness, { status: 201 });
}
