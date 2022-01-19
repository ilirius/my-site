const isIsogram = (str) =>
  !!str.toLowerCase().split``.filter(
    (
      (h) => (v) =>
        (h[v] = (h[v] || 0) + 1) === 2
    )({})
  ).length;

console.log(isIsogram("Анастасия"));
console.log(isIsogram("Андрей"));
