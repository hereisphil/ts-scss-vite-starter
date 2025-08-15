import "./styles.scss";

const hint = document.querySelector<HTMLParagraphElement>("#hint")!;
const items = document.querySelector<HTMLUListElement>("#items")!;

hint.textContent = "Edit src/main.ts and src/styles.scss, save, and watch.";
["Alpha", "Beta", "Gamma"].forEach((label) => {
  const li = document.createElement("li");
  li.textContent = label;
  items.append(li);
});
