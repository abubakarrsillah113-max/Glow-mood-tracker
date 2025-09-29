function selectMood(mood) {
  const moodHistory = document.getElementById("mood-history");
  const li = document.createElement("li");
  li.textContent = mood;
  moodHistory.appendChild(li);
  document.getElementById("mood-feedback").textContent = `You are feeling:{mood}`;

}
function clearHistory() {
  const moodHistory = document.getElementById("mood-history");
  moodHistory.innerHTML = "";

}
