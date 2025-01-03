export function getLocalStorage(name: string): string | null {
  return localStorage.getItem(name);
}

export function setLocalStorage(name: string, value: string): void {
  localStorage.setItem(name, value);
}

export function removeLocalStorage(name: string) {
  localStorage.removeItem(name);
}
