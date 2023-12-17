import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createBusinessSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createBusinessSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newBusiness = await prisma.business.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newBusiness, { status: 201 });
}
