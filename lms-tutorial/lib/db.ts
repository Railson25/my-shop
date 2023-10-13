import {PrismaClient} from '@prisma/client'

declare global{
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

// globalThis nao e detectado no root reload por isso usamos ele
if(process.env.NODE_ENV !== 'production') globalThis.prisma = db


// fazemos uma verificacao acima para que quando estivermos em producao nao causarmos overload gerando varias instancias do PrismaClient! esse overloads acontecem por causa do root reload que ao salavre cria uma nova instancia em producao ele ira funcinar ssim =>   export const db = new PrismaClient()
 