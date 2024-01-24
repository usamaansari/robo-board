import { Product, User, Agribot } from "@/app/lib/models";
import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const LoadDB = async () => {
  await connectToDB();
};

LoadDB();

export async function GET(request, response) {
  //ConnectDB();
  const agribots = await Agribot.find({});
  return NextResponse.json({ agribots });
}

export async function POST(request) {
  const { name, desc, price, stock, img, speciality, height, weight } = await request.json();

  const newAgribot = new Agribot({
    name,
    desc,
    price,
    stock,
    img,
    speciality,
    height,
    weight,
  });

  await newAgribot.save();

  return NextResponse.json({ msg: "Agribot Created" });
}

export async function DELETE(request, response) {
  //ConnectDB();
  const id = request.nextUrl.searchParams.get("id");

  await Agribot.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Deleted successfully" });
}