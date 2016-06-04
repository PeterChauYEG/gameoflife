export function startGenerationCounter(generations) {
  return {
    type: 'START_GENERATION_COUNTER',
    generations,
  }
}
