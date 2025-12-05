import { readFileSync } from 'node:fs';
import { Console, Effect } from 'effect';

Effect.gen(function* () {
    const input = readFileSync('src/input.txt', 'utf-8');
    const lines = input.split('\n');
    let start = 50;
    let pwd = 0;
    for (const line of lines) {
        const regex = /^(L|R)(\d+)$/;
        const match = line.match(regex);
        if (match) {
            const direction = match[1];
            const distance = Number.parseInt(match[2]);
            console.log(direction, distance);
            if (direction == 'L') {
                start = (start - distance) % 100;
            } else {
                start = (start + distance) % 100;
            }
        }

        if (start === 0) {
            pwd += 1;
        }
    }
    console.log(pwd);
    return pwd;
}).pipe(Effect.runPromise)