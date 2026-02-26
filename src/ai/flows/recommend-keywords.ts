'use server';
/**
 * @fileOverview Recommends relevant keywords for profile sections to improve searchability.
 *
 * - recommendKeywords - A function that recommends keywords for a given profile section.
 * - RecommendKeywordsInput - The input type for the recommendKeywords function.
 * - RecommendKeywordsOutput - The return type for the recommendKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendKeywordsInputSchema = z.object({
  profileSection: z
    .string()
    .describe('The content of the profile section to generate keywords for.'),
  tone: z.string().describe('The desired tone of the keywords (e.g., professional, casual).').optional(),
});
export type RecommendKeywordsInput = z.infer<typeof RecommendKeywordsInputSchema>;

const RecommendKeywordsOutputSchema = z.object({
  keywords: z.array(z.string()).describe('An array of relevant keywords for the profile section.'),
});
export type RecommendKeywordsOutput = z.infer<typeof RecommendKeywordsOutputSchema>;

export async function recommendKeywords(input: RecommendKeywordsInput): Promise<RecommendKeywordsOutput> {
  return recommendKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendKeywordsPrompt',
  input: {schema: RecommendKeywordsInputSchema},
  output: {schema: RecommendKeywordsOutputSchema},
  prompt: `You are an expert in keyword research and SEO.

  Given the following profile section content and desired tone, recommend a list of relevant keywords to improve searchability. Keywords should be specific and tailored to the content.

  Profile Section Content: {{{profileSection}}}
  Desired Tone: {{{tone}}}

  Keywords:`, 
});

const recommendKeywordsFlow = ai.defineFlow(
  {
    name: 'recommendKeywordsFlow',
    inputSchema: RecommendKeywordsInputSchema,
    outputSchema: RecommendKeywordsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
