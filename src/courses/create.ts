import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.createMany({
    data:[
      {
      name: "Elixir",
      duration:150,
      description:"Curso de Elixir",
      fk_id_teachers:""
    },
    {
      name: "Ruby",
      duration:100,
      description:"Curso de Ruby",
      fk_id_teachers:""
    },
    {
      name: "Java",
      duration:250,
      description:"Curso de Java",
      fk_id_teachers:""
    },
    {
      name: "Python",
      duration:200,
      description:"Curso de Python",
      fk_id_teachers:""
    },
    {
      name: "Rust",
      duration:350,
      description:"Rust",
      fk_id_teachers:""
    }
  ],
    
  })
  console.log(result)
}
main();