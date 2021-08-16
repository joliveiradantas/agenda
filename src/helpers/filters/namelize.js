const IGNORED_WORDS = ['a', 'e', 'o', 'os', 'da', 'das', 'de', 'di', 'do', 'dos'];

export function capitalize(words = []) {
  if (!words || !words.length || !words.map) {
    return '';
  }

  return words.map((word, index) => {
    if (index > 0 && IGNORED_WORDS.indexOf(word) > -1) {
      return word;
    }

    return word[0].toUpperCase() + word.slice(1);
  });
}

export default function namelize(value = '', options = {}) {
  if (!value || typeof value !== 'string') {
    return '';
  }

  let words = value.toLowerCase().replace(/ +/g, ' ').trim().split(' ');

  if (options.limit) {
    let index = options.limit;

    if (IGNORED_WORDS.indexOf(words[index - 1]) > -1) {
      index += 1;
    }

    words = words.slice(0, index);
  }
  
  return capitalize(words).join(' ');
}