const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

let text = "";
for (const x of letters.values()) {
  text += x;
}

console.log(text);
