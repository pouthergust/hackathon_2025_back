import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { LlmModule } from '@app/llm';

@Module({
  controllers: [MessagesController, LlmModule],
  providers: [MessagesService],
})
export class MessagesModule {}
