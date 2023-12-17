import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

// Validation Schema
const createBusinessSchema = z.object({
  title: z.string().min(1, "Title is required.").max(255),
  description: z.string().min(1, "Description is required."),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate Response
  const validation = createBusinessSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  // Store Business in database
  const newBusiness = await prisma.business.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newBusiness, { status: 201 });
}
