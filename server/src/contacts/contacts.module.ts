import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { Contact } from './contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactsService],
  controllers: [ContactsController],
})
export class ContactsModule {}
