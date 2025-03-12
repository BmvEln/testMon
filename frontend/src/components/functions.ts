export function clearUrl(url: string) {
  return url
    ?.replace("https://", "")
    .replace("www.", "")
    .replace("http://", "");
}
