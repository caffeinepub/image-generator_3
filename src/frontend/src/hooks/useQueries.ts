import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { GenerateImageResponse } from '../backend';

export function useGenerateImage() {
  const { actor } = useActor();

  return useMutation<GenerateImageResponse, Error, string>({
    mutationFn: async (prompt: string) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }
      return await actor.generateImage(prompt);
    },
  });
}
