# Methods [^](#methods)

### throttle(msec, fn)

Limit function call to 1 per msec

```js
import { throttle } from "@ursarik/utils";
const greeting = name => console.log(`Hi, ${name}`);
const throttledGreeting = throttle(100, greeting);

throttledGreeting("Ursarik"); // Hi, Ursarik
throttledGreeting("Ursarik"); // this call will be ignored because 100 milliseconds have not elapsed

setTimeout(() => {
  throttledGreeting("Ursarik"); // Hi, Ursarik
}, 100);
```

### calculatePercentage(of, percent)

Calculate percentage of number

```js
import { calculatePercentage } from "@ursarik/utils";
console.log(calculatePercentage(200, 20)); // 40
```

### generateRandomNumber(min, max)

Generates a random integer from min to max (exclusive).

### multiIncludes(str, values)

Return true if str include at least one value from values

```js
import { multiIncludes } from "@ursarik/utils";
console.log(multiIncludes("just a random string", ["random", "aa"])); // true
```

### sleep(msec)
