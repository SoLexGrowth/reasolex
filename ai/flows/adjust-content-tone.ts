'use server';

/**
 * @fileOverview Adjusts the tone of the AI-generated content suggestions.
 *
 * - adjustContentTone - A function that handles the adjustment of content tone.
 * - AdjustContentToneInput - The input type for the adjustContentTone function.
 * - AdjustContentToneOutput - The return type for the adjustContentTone function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdjustContentToneInputSchema = z.object({
  content: z.string().describe('The content to adjust the tone of.'),
  tone: z.string().describe('The desired tone for the content (e.g., formal, informal, professional).'),
});
export type AdjustContentToneInput = z.infer<typeof AdjustContentToneInputSchema>;

const AdjustContentToneOutputSchema = z.object({
  adjustedContent: z.string().describe('The content with the adjusted tone.'),
});
export type AdjustContentToneOutput = z.infer<typeof AdjustContentToneOutputSchema>;

export async function adjustContentTone(input: AdjustContentToneInput): Promise<AdjustContentToneOutput> {
  return adjustContentToneFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adjustContentTonePrompt',
  input: {schema: AdjustContentToneInputSchema},
  output: {schema: AdjustContentToneOutputSchema},
  prompt: `You are a content optimization expert. Adjust the tone of the following content to be more {{{tone}}}.\n\nContent: {{{content}}}`,
});

const adjustContentToneFlow = ai.defineFlow(
  {
    name: 'adjustContentToneFlow',
    inputSchema: AdjustContentToneInputSchema,
    outputSchema: AdjustContentToneOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
