export const handlePresenterKeyDown = (
  event: KeyboardEvent,
  onToggleMode: () => void
) => {
  if (event.key.toLowerCase() === 'm') {
    onToggleMode();
  }
};