# power2save

## Save simple data with powers of two.

Very rarely, you might want a quick and dirty way to save which elements from an array are selected.
An easy example would be to select some days of the week. Each element of the array can only be selected
once.

power2save enables you to find the sum of powers of two that represent the selected elements in your array,
and to retrieve the selected elements from a sum of powers of two.

It works because if you associate a power of 2 to each of the elements of your array, a specific sum of any of those powers of two represents a unique combination of the elements in your array.

## Quick start

Using the week days example:

```javascript
// import the lib
import Power from '@theregge/power2save'

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

// Initialize a class instance with the data
const p = new Power(weekdays)

// What is the sum of power of two for ['Monday', 'Thursday'd] ?
p.getValue(['Monday', 'Thursday']) // 9 (can be saved to a db)

// Retrive days from number saved in db:
p.get(9) // ['Monday', 'Thursday']
```

## What's cool about it?

First of all, it's not _that_ cool... But it enables you to save multiple chuncks of information with only one number. In the quickstart example, you see that you can save multiple days of the week with only one number, 'Monday' and 'Thursday' is saved as the single entry `(int)9`.

## Warnings

- **Only use this with very small arrays of elements to save, otherwise the powers of two will get very big and might not fit your database requirements.**
- **For most situations, it is NOT a good idea to use powers of 2 to save your data. It is only for very contrived situations. I created this mostly for fun and for using bitwise operators that I have started learning!**
