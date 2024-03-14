import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ColaboradoresModule } from './Colaboradores/colaborador.module';

@Module({
    imports: [UsersModule, ProductsModule, ColaboradoresModule], // Importe os módulos de usuários e produtos
})
export class AppModule { }
