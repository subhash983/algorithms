const reverseInt = n => {
  return (
    Math.sign(n) *
    parseInt(
      `${n}`
        .split("")
        .reverse()
        .join("")
    )
  );
};

console.log(reverseInt(-18990));
