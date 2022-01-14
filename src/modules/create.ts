import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.modules.create({
    data:{
      description:"Aprendendo firebase do zero",
      name:"Aprendendo Firebase",
      CoursesModules: {
        create:{
          courses:{
            connect:{
            id:"4f736fae-815d-4237-8f11-cfa45d0d558b"
          }
        }
        }
      }
    }
  })
  console.log(result)
}

main();