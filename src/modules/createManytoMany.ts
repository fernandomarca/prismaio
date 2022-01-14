import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.coursesModules.create({
    data:{
      fk_id_course:"04154cd2-74d7-4f7f-9720-a5d25b1eca2f",
      fk_id_module:"170f75ba-0046-4256-9edb-1f8236549359"
    }
  })

  console.log(result)
}

main()