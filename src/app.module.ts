import { Module } from '@nestjs/common';
import { AppController } from './main/app.controller';
import { AppService } from './main/app.service';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [UsersModule, TaskModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
