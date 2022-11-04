import { Module } from '@nestjs/common';
import { ContactsrController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  controllers: [ContactsrController],
  providers: [ContactsService],
})
export class ContactsModule {}
