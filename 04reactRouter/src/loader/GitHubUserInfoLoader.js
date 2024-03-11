export const GitHubUserInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hellokeyur');
    return response.json();
}