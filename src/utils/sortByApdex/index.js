/**
 * sortByApdex function
 * @param {array} apps - Array of objects
 * @returns {array} - the apps sorted by apdex
 */
export default function sortByApdex (apps) {
  // Notation: O(n)
  return [...apps].sort((a, b) => b.apdex - a.apdex);
};
