'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting improvements to profile content.
 *
 * The flow accepts various profile sections (tagline, bio, project descriptions, etc.) as input
 * and uses an AI model to suggest improvements. The suggestions include options to adjust the tone
 * and recommend relevant keywords.  The output is a set of suggested improvements for each section.
 *
 * @exports suggestProfileContentImprovements - The main function to trigger the flow.
 * @exports SuggestProfileContentImprovementsInput - The input type for the function.
 * @exports SuggestProfileContentImprovementsOutput - The output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';


const SuggestProfileContentImprovementsInputSchema = z.object({
  tagline: z.string().describe('The current tagline.'),
  bio: z.string().describe('The current biography.'),
  projectDescriptions: z.array(z.string()).describe('Array of project descriptions.'),
  valueStatements: z.array(z.string()).describe('Array of value statements.'),
});

export type SuggestProfileContentImprovementsInput = z.infer<typeof SuggestProfileContentImprovementsInputSchema>;

const SuggestProfileContentImprovementsOutputSchema = z.object({
  taglineSuggestions: z.array(z.string()).describe('Suggested improvements for the tagline.'),
  bioSuggestions: z.array(z.string()).describe('Suggested improvements for the biography.'),
  projectDescriptionSuggestions: z.record(z.string(), z.array(z.string())).describe('Suggested improvements for each project description, keyed by the original description.'),
  valueStatementSuggestions: z.record(z.string(), z.array(z.string())).describe('Suggested improvements for each value statement, keyed by the original statement.'),
});

export type SuggestProfileContentImprovementsOutput = z.infer<typeof SuggestProfileContentImprovementsOutputSchema>;

export async function suggestProfileContentImprovements(input: SuggestProfileContentImprovementsInput): Promise<SuggestProfileContentImprovementsOutput> {
  return suggestProfileContentImprovementsFlow(input);
}

const profileContentImprovementPrompt = ai.definePrompt({
  name: 'profileContentImprovementPrompt',
  input: {schema: SuggestProfileContentImprovementsInputSchema},
  output: {schema: SuggestProfileContentImprovementsOutputSchema},
  prompt: `You are an AI assistant designed to improve profile content.

  Given the following profile sections, suggest improvements for each. Provide a few options for each section, focusing on clarity, impact, and relevance.

  Tagline: {{{tagline}}}
  Bio: {{{bio}}}

  Project Descriptions:
  {{#each projectDescriptions}}
  - {{{this}}}
  {{/each}}

  Value Statements:
  {{#each valueStatements}}
  - {{{this}}}
  {{/each}}

  Return your answer as a JSON object.  The keys of the JSON object should be taglineSuggestions, bioSuggestions, projectDescriptionSuggestions, and valueStatementSuggestions. The projectDescriptionSuggestions and valueStatementSuggestions should be keyed by the original description or value statement.
  `,
});

const suggestProfileContentImprovementsFlow = ai.defineFlow(
  {
    name: 'suggestProfileContentImprovementsFlow',
    inputSchema: SuggestProfileContentImprovementsInputSchema,
    outputSchema: SuggestProfileContentImprovementsOutputSchema,
  },
  async input => {
    const {output} = await profileContentImprovementPrompt(input);
    return output!;
  }
);
