function debounce(func, wait, immediate) {
  let timeout;

  // Эта функция выполняется, когда событие DOM вызвано.
  return function () {
    // Сохраняем контекст this и любые параметры,
    // переданные в executedFunction.
    const context = this;
    const args = arguments;

    // Функция, вызываемая по истечению времени debounce.
    const later = function () {
      // Нулевой timeout, чтобы указать, что debounce закончилась.
      timeout = null;

      // Вызываем функцию, если immediate !== true,
      // то есть, мы вызываем функцию в конце, после wait времени.
      if (!immediate) func.apply(context, args);
    };

    // Определяем, следует ли нам вызывать функцию в начале.
    const callNow = immediate && !timeout;

    // clearTimeout сбрасывает ожидание при каждом выполнении функции.
    // Это шаг, который предотвращает выполнение функции.
    clearTimeout(timeout);

    // Перезапускаем период ожидания debounce.
    // setTimeout возвращает истинное значение / truthy value
    // (оно отличается в web и node)
    timeout = setTimeout(later, wait);

    // Вызываем функцию в начале, если immediate === true
    if (callNow) func.apply(context, args);
  };
}

/**
 * Написать функцию проверки на простое число
 */
function isPrime(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) if (num % i === 0) return false;
  return true;
}

function isPrime(num, div = 3) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  if (div * div > num) return true;
  if (num % div === 0) return false;
  return isPrime(num, div + 2);
}

// функцию на нахождение факториала числа
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function whatIsGlobal() {
  try {
    return GLOBAL && "node";
  } catch (ex) {
    return "browser";
  }
}

function rle(str) {
  if (str.match(/[^A-Z]/g)) {
    throw new Error(`${str} is invalid!`);
  }

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let j = i;

    if (char === str[++j]) {
      let count = 1;

      while (char === str[j++]) {
        count++;
      }

      result += `${char}${count}`;
      i += count - 1;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
