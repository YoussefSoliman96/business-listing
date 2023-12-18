import authOptions from "@/app/auth/authOptions";
import { businessSchema } from "@/app/validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = businessSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!business)
    return NextResponse.json({ error: "Invalid business" }, { status: 404 });

  const udpatedBusiness = await prisma.business.update({
    where: { id: business.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(udpatedBusiness);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const business = await prisma.business.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!business)
    return NextResponse.json({ error: "Invalid business" }, { status: 404 });

  await prisma.business.delete({
    where: { id: business.id },
  });

  return NextResponse.json({});
}
