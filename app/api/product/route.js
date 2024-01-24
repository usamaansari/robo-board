import { Product, User } from "@/app/lib/models";
import { connectToDB } from "@/app/lib/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const LoadDB = async () => {
  await connectToDB();
};

LoadDB();

export async function GET(request, response) {
  //ConnectDB();
  const products = await Product.find({});
  return NextResponse.json({ products });
}

export async function POST(request) {
  const { title, desc, price, stock, img, color, size } = await request.json();

  const newProduct = new Product({
    title,
    desc,
    price,
    stock,
    img,
    color,
    size,
  });

  await newProduct.save();

  return NextResponse.json({ msg: "Product Created" });
}

export async function DELETE(request, response) {
  //ConnectDB();
  const id = request.nextUrl.searchParams.get("id");

  await Product.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Deleted successfully" });
}

/*
export async function PUT (request, response) {
    //ConnectDB();
    const id = request.nextUrl.searchParams.get("id");

     await TodoModel.findByIdAndUpdate({_id:id}, [{
        $set:{
            isComplete: {$eq:[false,"$isComplete"]}
        }
     }]);
return NextResponse.json({msg: "Todo Updated"})
}
*/
