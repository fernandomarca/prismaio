import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const result = await prisma.courses.findMany({
    where:{
      OR: [
        {
          name:{
            contains:"ReactJs",
            mode:"insensitive"
          },
        },
        {
          name:{
            contains:"React Native",
            mode:"insensitive"
          }
        }
      ],
      AND:{
        duration:400
      }
    },
  })

  console.log(result)
}

main()