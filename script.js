function calculateHypotenuse() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);

  if (isNaN(sideA) || isNaN(sideB)) {
    document.getElementById("result").textContent =
      "Please enter valid numbers for both sides.";
    return;
  }

  const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
  document.getElementById(
    "result"
  ).textContent = `The length of the hypotenuse is ${hypotenuse.toFixed(2)}`;
}
