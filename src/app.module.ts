import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V0Module } from './v0/v0.module';

@Module({
  imports: [V0Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
