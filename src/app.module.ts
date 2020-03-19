import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GraphQLModule.forRootAsync({ useClass: GraphqlOptions }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
