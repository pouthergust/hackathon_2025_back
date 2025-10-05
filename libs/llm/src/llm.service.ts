import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';

@Injectable()
export class LlmService {
    async generateContentFromMLDev(contents: string) {
        const ai = new GoogleGenAI({vertexai: false, apiKey: process.env.GEMINI_API_KEY});
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents,
        });
        console.debug(response.text);
        return JSON.stringify({response: response.text});
    }
}
