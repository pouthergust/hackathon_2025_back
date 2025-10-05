// import { LlmService } from '/llm';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MessagesService {

    // constructor(private readonly llmService: LlmService) {}

    getHello(): string {
        return 'Hello World!';
    }

    sendMessage(message: string): string {
        return "Aoba" // this.llmService.generateContentFromMLDev(message);
    }
}
