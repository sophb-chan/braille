import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const parser = require('./fileparser'), fs = require('fs');
const brailleSpinnerFile = fs.readFileSync('./patterns.braille', { encoding: 'utf-8' });

function getBrailleSpinnerFrames(size = 3, highres = false) {
    const compiledBraille = parser.compileFile(brailleSpinnerFile);
    const frames = compiledBraille.patterns[['l', 'h'][highres+0] + size];
    return frames;
}

export default getBrailleSpinnerFrames;
