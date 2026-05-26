const startTime = Date.now();
const timerDisplay = document.getElementById("timer");

const splashText = document.getElementById("splash-text");

setInterval(() => {
	const elapsedTime = Date.now() - startTime;
	const totalSeconds = Math.floor(elapsedTime / 1000);
	
	const hours = Math.floor(totalSeconds / 3600)
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	const parts = [];
	if (hours > 0) { parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`); }
	if (minutes > 0) { parts.push(`${minutes} min${minutes !== 1 ? 's' : ''}`); }
	parts.push(`${seconds} sec${seconds !== 1 ? 's' : ''}`);

	timerDisplay.textContent = `Time elapsed: ${parts.join(", ")}`;
}, 1000);

const updateSplashText = () => {
	const splashes = [
		"Loading...",
		"Thank you for your patience...",
		"Almost finished...",
		"Content will be ready soon...",
		"Please leave this page open...",
		"Don't exit this page while loading...",
		"Nearly ready..."
	];

	splashText.textContent = splashes[Math.floor(Math.random() * splashes.length)];

	setTimeout(updateSplashText, Math.random() * 60000 + 30000);
};

setTimeout(updateSplashText, Math.random() * 60000 + 30000);
