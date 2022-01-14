import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.coursesModules.delete({
    where:{
      id:"9692f934-2aae-411d-ac33-5693fc8ed9f9"
    }
  })
  console.log(result)
}
main()