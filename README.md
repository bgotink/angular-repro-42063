# Reproduction for angular/angular#42063

Clone, run `yarn` and `yarn build`

```
$ yarn build
Building Angular Package

------------------------------------------------------------------------------
Building entry point 'repro'
------------------------------------------------------------------------------
✔ Compiling TypeScript sources through NGC
✔ Bundling to FESM2015
✔ Bundling to UMD
ℹ Removing scripts section in package.json as it's considered a potential security vulnerability.
ℹ Removing devDependencies section in package.json.
✔ Writing package metadata
✔ Built repro

------------------------------------------------------------------------------
Built Angular Package
 - from: /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.6Rkk9EFSAa
 - to:   /private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.6Rkk9EFSAa/dist
------------------------------------------------------------------------------

Build at: 2021-05-12T13:35:00.075Z - Time: 3077ms


api-extractor 7.15.1  - https://api-extractor.com/

Using configuration from ./api-extractor.json
Analysis will use the bundled TypeScript version 4.2.4

ERROR: "import * as ___ from ___;" is not supported yet for local files.
/private/var/folders/_d/ch2kc4h960d10cy_2c41qqzw0000gn/T/tmp.6Rkk9EFSAa/dist/module.d.ts:3:1
```

The offending file:

```
$ cat dist/module.d.ts
import { MyDirective } from './directive';
import * as i0 from "@angular/core";
import * as i1 from "./directive";
export declare class MyModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MyModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MyModule, [typeof i1.MyDirective], never, [typeof i1.MyDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MyModule>;
}
export { MyDirective };
```