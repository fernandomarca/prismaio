import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
const result = await prisma.courses.create({
  data:{
    name:"React native",
    duration:200,
    description:"React native",
    teacher:{
     create:{
       name:"Erick"
     }
    }
    }
  }
);
console.log(result)
}

main();