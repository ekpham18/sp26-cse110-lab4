1. values added: 20
2. final result: 20
3. var is function-scoped or global-scoped, meaning it will be retained outside of its immediate block and "bleed" into the rest of a function or global scope. var is also "hoisted" up to exist before its declaration and can be re-defined, which may not be the intended behavior we always want. It's better to be specific with "let" or "const."
4. values added: 20
5. Error; using "let," result only gets declared within the "if" block. Line 13 doesn't see its declaration, so returns an error.
6. Error: Line 9 can't run because we run into an error on line 7 trying to re-assign the value of "result," which can't happen for a const.
7. Error: using "const," result only gets declared within the "if" block. Line 13 doesn't see its declaration, so returns an error.