export function useLargeText() {
  const largeText = useState("large-text", () => false);

  onMounted(() => {
    largeText.value = localStorage.getItem("large-text") === "1";
  });

  watch(largeText, (value) => {
    localStorage.setItem("large-text", value ? "1" : "0");
  });

  return largeText;
}
