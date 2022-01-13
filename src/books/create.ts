import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.books.create({
    data:{
      name:"Arquitetura limpa",
      author_id:"67991724-1838-4731-8117-0d67f83ffd6f",
    }
  })
  console.log(result);
}

main();