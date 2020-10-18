# Percent to HEX package

Converts percent value (between 0 and 1) to HEX color code (between green and red)

### Install
`npm i percent-to-hex`

### Usage with default saturation (100%) and default lightness (50%)

Default saturation 100%, lightness 50%:


``` 
percentToHex(1) // output: "#ff0000"
percentToHex(0.5) // output: "#ffff00"
percentToHex(0) // output: "#00ff00"
```

### Usage with custom saturation & lightness:

``` 
percentToHex([0.5,85,60]) // output: "#f0f042"
```
