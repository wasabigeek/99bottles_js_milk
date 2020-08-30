import { downTo } from './helpers';

class Bottles {
    bottles_text(num) {
        if (num > 1) {
            return `${num} bottles`
        } else if (num == 1) {
            return `${num} bottle`
        } else if (num == 0) {
            return "no more bottles"
        } else if (num < 0) {
            return '99 bottles'
        }
    }

    titlelize(text) {
        return `${text[0].toUpperCase()}${text.slice(1)}`
    }

    take_text(initial, remaining) {
        if (remaining < 0) {
            return `Go to the store and buy some more, `
        } else {
            return `Take ${initial == 1 ? 'it' : 'one'} down and pass it around, `
        }
    }

    verse(num) {
        const remaining = num - 1;

        return `${this.titlelize(this.bottles_text(num))} of milk on the wall, ` +
        `${this.bottles_text(num)} of milk.\n` +
        this.take_text(num, remaining) +
        `${this.bottles_text(remaining)} of milk on the wall.\n`;
    }

    verses(num1, num2) {
        let nums = [];
        for (let next = num1; next >= num2; next--) {
            nums.push(next);
        }
        return nums.map(num => this.verse(num)).join("\n");
    }

    song() {
        return this.verses(99, 0);
    }
}

export { Bottles };
