import { Resolver, Query } from '@nestjs/graphql';
import { User } from 'src/graphql.schema';

@Resolver()
export class UsersResolver {
  @Query('getUsers')
  getInclusionDirectives(): User[] {
    return [
      {
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'Example',
      },
    ];
  }
}
