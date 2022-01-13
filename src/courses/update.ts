import {PrismaClient} from "@prisma/client"

const prismaClient = new PrismaClient();
async function main(){
  const result = await prismaClient.courses.update({
    where: {
      id: "5beb4c09-2ff7-438a-a101-afaaccb3e98b"
    },
    data:{
      duration: 300,
      description: "Curso de Rust"
    }
  });
  console.log(result)
}

main();