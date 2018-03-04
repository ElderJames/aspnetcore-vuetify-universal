export default {
  header: 'Расстояние',
  headerText: 'Обновите макет, не создавая новые классы. Помощники интервалов полезны для изменения **padding** и **margin** элемента.',
  toc: [
    {
      text: 'Введение',
      href: 'introduction'
    },
    {
      text: 'Как это работает',
      href: 'how-it-works'
    },
    {
      text: 'Примеры',
      href: 'examples'
    },
    {
      text: 'Горизонтальное центрирование',
      href: 'horizontal-centering'
    }
  ],
  howText: 'Примените **margin** или **padding** к элементу в диапазоне от _0 до 5_. Инкремент каждого размера был разработан для согласования с общим интервалом Material Design. Эти классы могут применяться с использованием следующего формата `{property} {direction} - {size}`.',
  propertyText: '_property_ применяет тип интервала:',
  properties: [
    '`m` - применяет `margin`',
    '`p` - применяет `padding`'
  ],
  directionText: 'Параметр _direction_ обозначает сторону, к которой относится свойство:',
  directions: [
    '`t` - применяет свойство для `margin-top` или `padding-top`',
    '`b` - применяет свойство для `margin-bottom` или `padding-bottom`',
    '`l` - применяет свойство для `margin-left` или `padding-left`',
    '`r` - применяет свойство для `margin-right` или `padding-right`',
    '`x` - применяет свойство для оба `*-left` и `*-right`',
    '`y` - применяет свойство для оба `*-top` и `*-bottom`'
  ],
  sizeText: '_size_ управляет приращением свойства:',
  sizes: [
    '`0` - удаляет свойство для `margin` или `padding` установив его на `0`',
    '`1` - устанавливает `margin` или `padding` свойство к `$spacer * .25`',
    '`2` - устанавливает `margin` или `padding` свойство к `$spacer * .5`',
    '`3` - устанавливает `margin` или `padding` свойство к `$spacer`',
    '`4` - устанавливает `margin` или `padding` свойство к `$spacer * 1.5`',
    '`5` - устанавливает `margin` или `padding` свойство к `$spacer * 3`'
  ],
  horizontalHeader: 'Горизонтальное центрирование',
  horizontalText: 'Для блоков с заданной шириной вы можете применить `.mx-auto` для горизонтального центрирования содержимого.'
}
