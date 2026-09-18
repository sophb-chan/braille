const getSpinnerFrames = require('./spinner').default;

const size = 3, highQuality = false;
const fps = 10, frames = getSpinnerFrames(size, highQuality);
let frame = 0;
setInterval(() => {
	process.stdout.write('\b \b');
	process.stdout.write(frames[frame]);
	frame--;
	if (frame < 0) frame = frames.length - 1;
	else frame %= frames.length;
}, 1e3 / fps);
