A simple function `exportMain(module, packageToExport) : packageToExport`.  
The function does just `module.exports.default = module.exports = packageToExport`.

⚠️ The function assign to the package's `default` field the package itself. Then:
1.  The `default` field must be  writable and not already used by another value, otherwise the value will be lost.
2. It creates a circle ref `package.default = package` (can be problem if you wish to serialize your package).
