// make a search to chat gpt api
// https://api.openai.com/v1/engines/davinci-codex/completions

export const testOpenAI = () => {
    return fetch("/api/openai");
};