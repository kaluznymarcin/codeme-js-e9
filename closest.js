function closest(element, selector) {
  if (!element) {
    return null;
  }

  if (element.closest) {
    return element.closest(selector);
  }

  const matchesSelector = element.matches ||
    element.msMatchesSelector ||
    element.webkitMatchesSelector ||
    element.mozMatchesSelector;

  if (matchesSelector.call(element, selector)) {
    return element;
  }

  return closest(element.parentElement, selector) || null;
}
