import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
const result = await prisma.courses.create({
  data:{
    name:"Curso de ReactJs",
    duration:400,
    description:"Curso de ReactJs",
    fk_id_teachers:"c4d31faf-7c4a-4cfc-ba0f-d3f7389a3bb4"
  }
});
console.log(result)
}

main();