import { Module } from "@nestjs/common";
import { LivrosController } from "./livros.controller";
import { LivrosService } from "./livros.service";
import { PrismaService } from "src/infraestrutura/prisma.service";
import { PrismaModule } from "src/infraestrutura/prisma.module";

@Module({
    imports: [ PrismaModule ],
    controllers: [ LivrosController ],
    providers: [ LivrosService ]
})
export class LivrosModule{}