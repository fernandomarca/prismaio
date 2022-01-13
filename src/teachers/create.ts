import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
  const result = await prisma.teachers.createMany({
    data:[
      {
      name: "Diego Fernandes",
    },
  ],
    
  })
  console.log(result)
}
main();