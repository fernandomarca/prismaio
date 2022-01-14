import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.findMany({
    include:{
      courses:{
        include:{
          teacher:true
        }
      },
      module:true,
    }
  })
  console.log(JSON.stringify(result,null,2))
}

main();