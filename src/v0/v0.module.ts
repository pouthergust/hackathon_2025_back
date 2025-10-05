import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { MessagesModule } from './messages/messages.module';

@Module({
    imports: [HealthModule, MessagesModule],
})
export class V0Module {}
