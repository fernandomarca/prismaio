import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.createMany({
    data:[
      {
      name: "Elixir",
      duration:150,
      description:"Curso de Elixir"
    },
    {
      name: "Ruby",
      duration:100,
      description:"Curso de Ruby"
    },
    {
      name: "Java",
      duration:250,
      description:"Curso de Java"
    },
    {
      name: "Python",
      duration:200,
      description:"Curso de Python"
    },
    {
      name: "Rust",
      duration:350,
      description:"Rust"
    }
  ],
    
  })
  console.log(result)
}
main();