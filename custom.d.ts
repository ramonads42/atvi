declare module 'prompt-sync' {
    const prompt: () => (msg: string) => string;
    export default prompt;
}