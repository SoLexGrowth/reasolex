"use client";

import { useState, useEffect } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CopyButton } from "./CopyButton";
import { Wand2, BrainCircuit, LoaderCircle } from "lucide-react";
import { adjustContentTone } from "@/ai/flows/adjust-content-tone";
import { recommendKeywords } from "@/ai/flows/recommend-keywords";
import { useToast } from "@/hooks/use-toast";

type SuggestionSectionProps = {
  title: string;
  suggestions?: string[];
  originalContent: string;
};

const toneOptions = ["Professional", "Casual", "Enthusiastic", "Formal"];

export function SuggestionSection({
  title,
  suggestions,
  originalContent,
}: SuggestionSectionProps) {
  const [refinedContent, setRefinedContent] = useState(originalContent);
  const [tone, setTone] = useState(toneOptions[0]);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isRefining, setIsRefining] = useState(false);
  const [isGettingKeywords, setIsGettingKeywords] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setRefinedContent(originalContent);
  }, [originalContent]);

  const handleAdjustTone = async () => {
    setIsRefining(true);
    try {
      const result = await adjustContentTone({ content: refinedContent, tone });
      setRefinedContent(result.adjustedContent);
    } catch (error) {
      toast({ variant: "destructive", title: "Error adjusting tone." });
    } finally {
      setIsRefining(false);
    }
  };

  const handleGetKeywords = async () => {
    setIsGettingKeywords(true);
    try {
      const result = await recommendKeywords({ profileSection: refinedContent, tone });
      setKeywords(result.keywords);
    } catch (error) {
      toast({ variant: "destructive", title: "Error getting keywords." });
    } finally {
      setIsGettingKeywords(false);
    }
  };

  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Suggestions</h4>
          <div className="space-y-2">
            {suggestions.map((suggestion, i) => (
              <div key={i} className="flex items-center justify-between gap-2 p-3 rounded-md border bg-muted/50">
                <p className="text-sm">{suggestion}</p>
                <CopyButton textToCopy={suggestion} />
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
            <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Refine & Enhance</h4>
            <Textarea
                value={refinedContent}
                onChange={(e) => setRefinedContent(e.target.value)}
                rows={4}
                className="mb-2"
            />
            <div className="grid grid-cols-2 gap-2">
                <Select onValueChange={setTone} defaultValue={tone}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                        {toneOptions.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                    </SelectContent>
                </Select>
                 <Button onClick={handleAdjustTone} disabled={isRefining}>
                    {isRefining ? <LoaderCircle className="animate-spin" /> : <Wand2 />}
                    Adjust Tone
                </Button>
            </div>
             <div className="mt-2">
                <Button onClick={handleGetKeywords} disabled={isGettingKeywords} variant="outline" className="w-full">
                    {isGettingKeywords ? <LoaderCircle className="animate-spin" /> : <BrainCircuit />}
                    Recommend Keywords
                </Button>
             </div>
             {keywords.length > 0 && (
                <div className="mt-4">
                    <h5 className="font-semibold text-xs mb-2 text-muted-foreground">Keywords</h5>
                    <div className="flex flex-wrap gap-2">
                        {keywords.map(kw => <Badge key={kw} variant="secondary">{kw}</Badge>)}
                    </div>
                </div>
             )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
