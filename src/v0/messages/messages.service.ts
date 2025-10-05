import { LlmService } from 'src/services/llm/llm.service';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MessagesService {

    constructor(private readonly llmService: LlmService) {}

    getHello(): string {
        return 'Hello World!';
    }

    async sendMessage(message: string): Promise<string> {
        const newPrompt = `
            ${message}
        `;
        return await this.llmService.generateContentFromMLDev(newPrompt);
    }
}
