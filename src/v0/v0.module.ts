import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { MessagesModule } from './messages/messages.module';
import { LlmService } from 'src/services/llm/llm.service';

@Module({
    imports: [HealthModule, MessagesModule, V0Module],
    providers: [LlmService],
})
export class V0Module {}
