Repeat elements inside HTML pages using a simple attribute.

## Installation

Only include a script tag and you are good to go!

```html
<head>
  <!-- ... -->
  <script src="https://unpkg.com/data-repeat"></script>
</head>
```

## Examples

### Footer Navigation

```html
<div class="grid gap-1" data-repeat="3">
  <a
    href="#"
    data-repeat="5"
    data-words="2"
    class="transition hover:opacity-100 opacity-50"
  ></a>
</div>
```

<p align="center">
    <img src="https://raw.githubusercontent.com/Dollarsigned/data-repeat/refs/heads/main/art/footer-navigation.png" />
</p>
