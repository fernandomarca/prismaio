import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    // where:{
    //   id:"4f736fae-815d-4237-8f11-cfa45d0d558b",
    // },
    include:{
      CoursesModules:true,
      teacher:true
    }
  })
  console.log(JSON.stringify(result,null,2))
}

main();