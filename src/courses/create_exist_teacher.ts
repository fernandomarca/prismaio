import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
const result = await prisma.courses.create({
  data:{
    name:"Nodejs",
    duration:200,
    description:"Curso de Nodejs",
    teacher:{
      connect:{
        id:"f5969e47-eb35-4f7c-832b-5552bb110fed"
      }
    }
    }
  }
);
console.log(result)
}

main();