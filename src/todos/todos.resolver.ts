import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodosResolver {
  @Query((returns) => String)
  async getHello() {
    return 'hello world';
  }
}
