import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.coursesModules.create({
    data:{
     courses:{
       create:{
         duration:600,
         name:"Curso de Haskell",
         description:"Curso de Haskell",
         teacher:{
            create:{
              name:"João",
            }
         }
       }
     },
     module:{
       create:{
         name:"Introdução Haskell",
         description:"princípios do Haskell"
       }
     }
    }
  })

  console.log(result)
}

main()