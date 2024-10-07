import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AuthModule } from "./modules/auth/auth.module";
import { JwtAuthGuard } from "./modules/auth/guards/jtw-auth.guard";
import { UsersModule } from "./modules/users/users.module";
import { PrismaModule } from "./services/prisma/prisma.module";
import { ClienteModule } from './modules/cliente/cliente.module';
import { EnderecoModule } from './modules/endereco/endereco.module';

@Module({
	imports: [PrismaModule, UsersModule, AuthModule, AuthModule, ClienteModule, EnderecoModule],
	controllers: [],
	providers: [
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard,
		},
	],
})
export class AppModule {}
