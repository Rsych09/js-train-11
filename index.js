// Завдання: 1
/**
 * Функція `customSet` створює множину з масиву чисел та рядків, але видаляє всі елементи, які є числами.
 * arr - Масив, з якого створюється множина.
 * Повертаємо - Нову множину, яка містить лише рядкові елементи.
 */
function customSet(arr) {
  const resultSet = new Set(); // Створення нової множини

  // Перебір вхідного масиву
  for (const element of arr) {
    if (typeof element === 'string') {
      // Додавання лише рядкових значень до множини
      resultSet.add(element);
    }
  }

  return resultSet; // Повернення нової множини без чисел
}

// Приклад використання функції customSet
console.log(customSet([1, "a", 2, "b", 3, "c"]));

// Виведе: Set(3) { 'a', 'b', 'c' }

// Завдання: 2
/**
 * Функція `clearSet` очищає множину.
 * set - Множина, яку потрібно очистити.
 */
function clearSet(set) {
  if (set.size > 0) {
    set.clear(); // Очищення множини, якщо вона не порожня
    return 'Множину очищено.';
  } else {
    return new Set(); // Повернення порожньої множини, якщо вхідна множина вже порожня
  }
}

// Приклад використання функції clearSet
console.log(clearSet(new Set([1, 2, 3])));

// Виведе:
// Множину очищено.

// Завдання: 3
/**
 * Функція `addElements` додає елементи до множини з масиву, якщо вони ще не присутні у множині.
 * mySet - Множина, до якої будуть додані елементи.
 * arr - Масив з елементами, які потрібно додати до множини.
 * Повертаємо - Оновлену множину з новими елементами.
 */
function addElements(mySet, arr) {
  for (const element of arr) {
    mySet.add(element); // Додавання елементу до множини
  }
  return mySet; // Повернення оновленої множини
}

// Приклад використання функції addElements
console.log(addElements(new Set(["a", "b", "c"]), ["d", "e", "f"]));

// Виведе: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Завдання: 4
/**
 * Функція `filterAndAdd` видаляє з множини всі числові елементи та додає до множини унікальні значення з масиву,
 * якщо вони ще не присутні в множині. В результаті отримуємо множину, що містить лише рядкові значення.
 *
 * mySet - Множина, з якої будуть видалені числові елементи.
 * arr - Масив, з якого будуть додані унікальні елементи в множину.
 *
 * Повертаємо - Оновлену множину.
 */
function filterAndAdd(mySet, arr) {
  for (const element of mySet) {
    if (typeof element === 'number') {
      mySet.delete(element); // Видалення числового елементу з множини
    }
  }

  for (const element of arr) {
    if (!mySet.has(element)) {
      mySet.add(element); // Додавання унікальних значень з масиву до множини
    }
  }

  return mySet; // Повернення оновленої множини
}

// Приклад використання функції filterAndAdd
console.log(filterAndAdd(new Set([1, 2, 3, "a", "b", "c"]), ["d", "e", "f"]));

// Виведе: Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Завдання: 5

/**
 * Функція `checkValueAndType` перевіряє, чи містить множина певне значення та виводить його тип.
 *
 * mySet - Множина, в якій буде проводитися пошук.
 * value - Значення, яке потрібно знайти.
 *
 * Повертаємо - рядок із повідомленням про наявність значення та його тип.
 */
function checkValueAndType(mySet, value) {
  if (mySet.has(value)) {
    return `Множина має значення "${value}" типу "${typeof value}".`;
  } else {
    return `Множина не має значення "${value}".`;
  }
}

// Приклад використання функції checkValueAndType
console.log(checkValueAndType(new Set([1, 2, 3, "a", "b", "c"]), "b"));

// Виведе: Множина має значення "b" типу "string"

// Завдання: 6

/**
 * Функція `setToArray` конвертує множину в масив, видаляє з масиву всі числові елементи
 * та відсортовує рядкові елементи в алфавітному порядку.
 *
 * mySet - Множина, яку треба конвертувати в масив та обробити.
 *
 * Повертаємо - Відсортований масив із рядковими елементами.
 */
function setToArray(mySet) {
  const arrayFromSet = [...mySet]; // Конвертація множини в масив за допомогою деструктуризації

  const stringArray = arrayFromSet.filter(element => typeof element === 'string'); // Фільтрація лише рядкових елементів
  stringArray.sort(); // Сортування рядкових елементів в алфавітному порядку

  return stringArray; // Повернення відсортованого масиву рядкових елементів
}

// Приклад використання функції setToArray
console.log(setToArray(new Set([1, 2, 3, "b", "a", "c"])));

// Виведе: ['a', 'b', 'c']

// Завдання: 7

/**
 * Функція `removeDuplicatesInPlace` видаляє дублікати з масиву без створення нового масиву.
 * arr - Масив, з якого потрібно видалити дублікати.
 */
function removeDuplicatesInPlace(arr) {
  const uniqueElements = new Set(); // Створення множини для зберігання унікальних елементів

  for (let i = 0; i < arr.length; ) {
    if (uniqueElements.has(arr[i])) {
      arr.splice(i, 1); // Видалення елементу, якщо він уже є унікальним
    } else {
      uniqueElements.add(arr[i]); // Додавання унікального елементу до множини
      i++;
    }
  }

  return new Set(arr); // Повернення множини з унікальними елементами
}

// Приклад використання функції removeDuplicatesInPlace
console.log(removeDuplicatesInPlace([1, 2, 2, 3, 3, 4, 5, 5]));

// Виведе: Set(5) { 1, 2, 3, 4, 5 }

// Завдання: 8

/**
 * Функція `areDisjoint` перевіряє, чи є дві множини неспільними (не мають спільних елементів).
 * set1 - Перша множина.
 * set2 - Друга множина.
 * Повертаємо - true, якщо множини не мають спільних елементів, інакше false.
 */
function areDisjoint(set1, set2) {
  for (const element of set1) {
    if (set2.has(element)) {
      return false; // Якщо знайдено спільний елемент, повертаємо false
    }
  }
  return true; // Якщо немає спільних елементів, повертаємо true
}

// Приклад використання функції areDisjoint
console.log(areDisjoint(new Set([1, 2, 3]), new Set([3, 4, 5])));

// Виведе: false

// Завдання: 9

/**
 * Функція `getDifference` повертає множину, яка містить елементи, що належать першій множині, але не належать другій множині.
 * set1 - Перша множина.
 * set2 - Друга множина.
 * Повертаємо - Множина з елементами, що належать set1, але не належать set2.
 */
function getDifference(set1, set2) {
  const differenceSet = new Set(); // Створення множини для різниці елементів

  for (const element of set1) {
    if (!set2.has(element)) {
      differenceSet.add(element); // Додавання елементів, які належать першій, але не належать другій множині
    }
  }

  return differenceSet; // Повернення множини з різницею елементів
}

// Приклад використання функції getDifference
console.log(getDifference(new Set([1, 2, 3, 4]), new Set([2, 3])));

// Виведе: Set(2) { 1, 4 }

// Завдання: 10

/**
 * Функція `getIntersection` повертає множину, яка містить спільні елементи двох масивів.
 * arr1 - Перший масив.
 * arr2 - Другий масив.
 * Повертаємо - Множина зі спільними елементами.
 */
function getIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const intersectionSet = new Set(arr1.filter(elem => set2.has(elem)));
  
  return intersectionSet;
}

// Приклад використання функції getIntersection
console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

// Виведе: Set(2) { 3, 4 }

// Завдання: 11

/**
 * Функція `iterateSet` виконує ітерацію по множині та виводить ключі, значення та записи кожного елемента.
 * set - Множина, яку потрібно пройтись.
 */
function iterateSet(set) {
  const keysIterator = set.keys();
  const valuesIterator = set.values();
  const entriesIterator = set.entries();

  for (const key of keysIterator) {
    console.log(key);
  }

  for (const value of valuesIterator) {
    console.log(value);
  }

  for (const entry of entriesIterator) {
    console.log(entry);
  }
}

// Приклад використання функції iterateSet
console.log("Завдання: 11 ==============================");
iterateSet(new Set(["a", "b", "c"]));

// Виведе:
// a
// b
// c
// a
// b
// c
// [ 'a', 'a' ]
// [ 'b', 'b' ]
// [ 'c', 'c' ]

// Завдання: 12

/**
 * Функція `sumNumbers` рахує суму всіх числових елементів у множині.
 * set - Множина, у якій потрібно порахувати суму чисел.
 * Повертаємо - Суму числових елементів у множині.
 */
function sumNumbers(set) {
  let sum = 0;

  set.forEach((element) => {
    if (typeof element === 'number') {
      sum += element;
    }
  });

  return sum;
}

// Приклад використання функції sumNumbers
console.log("Завдання: 12 ==============================");
console.log(
  "Сума чисел у множині:",
  sumNumbers(new Set([1, 2, "a", 3, "b", 4, 5]))
);

