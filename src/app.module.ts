import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './v0/health/health.module';
import { MessagesModule } from './v0/messages/messages.module';
import { LlmModule } from '@app/llm';
import { LlmService } from './services/llm/llm.service';

@Module({
  imports: [HealthModule, MessagesModule, LlmModule],
  controllers: [AppController],
  providers: [AppService, LlmService],
})
export class AppModule {}
