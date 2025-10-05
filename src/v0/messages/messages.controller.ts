import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('v0/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('send')
  sendMessage(@Body('message') message: string) {
    return this.messagesService.sendMessage(message);
  }
}
