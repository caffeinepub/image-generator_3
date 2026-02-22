import { useState } from 'react';
import { Loader2, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useGenerateImage } from '../hooks/useQueries';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const generateImageMutation = useGenerateImage();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    try {
      const result = await generateImageMutation.mutateAsync(prompt);
      setGeneratedImageUrl(result.imageUrl);
    } catch (error) {
      console.error('Failed to generate image:', error);
    }
  };

  const isLoading = generateImageMutation.isPending;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="border-2 shadow-lg">
        <CardHeader className="space-y-2">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-primary" />
            Generate Your Image
          </CardTitle>
          <CardDescription className="text-base">
            Describe what you want to see and watch it come to life
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="prompt" className="text-sm font-medium text-foreground block">
              Your Prompt
            </label>
            <Textarea
              id="prompt"
              placeholder="A serene mountain landscape at sunset with golden light..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] resize-none text-base"
              disabled={isLoading}
            />
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isLoading}
            size="lg"
            className="w-full text-base font-semibold h-12"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Image
              </>
            )}
          </Button>

          {generateImageMutation.isError && (
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <p className="text-sm text-destructive font-medium">
                Failed to generate image. Please try again.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {generatedImageUrl && (
        <Card className="border-2 shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              Generated Image
            </CardTitle>
            <CardDescription>Your creation is ready</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-[2/3] bg-muted">
              <img
                src={generatedImageUrl}
                alt="Generated artwork"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-card">
              <p className="text-sm text-muted-foreground italic">"{prompt}"</p>
            </div>
          </CardContent>
        </Card>
      )}

      {!generatedImageUrl && !isLoading && (
        <Card className="border-2 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <ImageIcon className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No image yet</h3>
            <p className="text-muted-foreground max-w-sm">
              Enter a prompt above and click generate to create your first image
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
