import { rules, createComparison } from "../lib/compare.js";

export function initSearching(searchField) {
  // Используем стандартные правила + кастомное правило поиска
  const compare = createComparison(
    ["skipEmptyTargetValues"],
    [
      rules.searchMultipleFields(
        searchField,
        ["date", "customer", "seller"],
        false
      ),
    ]
  );
  return (data, state, action) => {
    // @todo: #5.2 — применить компаратор
    return data.filter((row) => compare(row, state));
  };
}
