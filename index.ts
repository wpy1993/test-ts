function getName(name: number): number;
function getName(name: string): string;

function getName(name: string | number): string | number {
  if (typeof name === "number") {
    return name;
  }
  return "name" + " here";
}

console.log("get number", getName(123));
console.log("get string", getName("wplay"));
