# BMI Calculator

A small React app that calculates Body Mass Index (BMI) and tells the user which category the result falls into.

## Features

- Enter weight (kg or pound) and height (cm or inch)
- Input validation: empty fields, non-numeric text, zero and negative numbers
- Unit pair check (kg with cm, or pound with inch)
- BMI result rounded to 2 decimals
- Result category with its own color: underweight, normal, overweight, obese
- AC button resets everything

## Tech

- React (functional components, `useState`)
- Plain CSS

## Project structure

- `BMI Calculator.jsx`: main component (state, validation, calculation, result)
- `Button.jsx`: reusable button, styled by the `mode` prop (`danger` or `safe`)
- `statusDiv.jsx`: reusable result box, styled by the `status` prop
- `index.css`: all styles

## How it works

1. The user types values; each input updates its own state through `onChange`.
2. Clicking Calculate runs `check()` (are the inputs filled?), then `inputValidation()` (are they valid numbers above 0?), then the unit pair check.
3. If everything passes, the BMI is saved with `setBmiResult`.
4. React re-renders, and the result box shows only when `bmiResult` is not `null`.

Formulas:

- kg and cm: `weight / (height / 100)^2`
- pound and inch: `weight / height^2 * 703`

## Mistakes I made and what I learned

1. **A normal variable does not update the screen.** Values shown on screen must live in state. A plain `let` is also reset on every render.
2. **Passing a function is not calling it.** Write `check()` to get the result, not `check`.
3. **Test every condition with a real value.** `.length < 0` is never true, so `check()` always returned `true`. Use `=== 0` to detect an empty field.
4. **Use state values, not handler functions.** Using `weightValueInput` instead of `inputWeightValue` in a formula gave `NaN`.
5. **`NaN` is a value, not a function.** Use `isNaN(value)`, not `NaN(value)`.
6. **Do not call a function with `alert` in the component body.** The body runs on every render, so the alert pops up on every keystroke. Call it inside the button handler.
7. **`return` only exits the function it is in.** Use the returned value of `inputValidation()` and `return` again in `calculate` to stop it.
8. **`null < 18.5` is `true`** because `null` becomes `0` in comparisons. Check for `null` before classifying.
9. **Each part should only look at its own data.** The display only checks `bmiResult`; the validation already happened before it was set.
10. **Match the strings exactly.** Option `value`s must equal the strings used in comparisons, including letter case.
11. **Check the parentheses in `Math.pow(base, exponent)`.** The exponent must be inside the call.
12. **Keep labels, selects and inputs of one field together.** Mixing height units with the weight input caused wrong results.

## Possible improvements

- Allow any unit combination (convert everything to kg and meters)
- Show an error message on the page instead of `alert`
