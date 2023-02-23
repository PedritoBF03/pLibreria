import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AuthModule } from '../auth/auth.module';
import { ClientesModule } from '../clientes/clientes.module';
import { LibrosModule } from '../libros/libros.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ AuthModule, ClientesModule,LibrosModule ]
})
export class SeedModule {}
