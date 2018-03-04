export default {
  header: '间距',
  headerText: '更新您的布局而无需创建新的类，间距辅助器对于修改元素的填充（padding）和边距（margin）都非常有用。',
  toc: [
    {
      text: '介绍',
      href: 'introduction'
    },
    {
      text: '如何工作',
      href: 'how-it-works'
    },
    {
      text: '示例',
      href: 'examples'
    },
    {
      text: '水平居中',
      href: 'horizontal-centering'
    }
  ],
  howText: '将**margin**或者**padding**应用于一个元素，范围在 _0到5_ 之间。每个尺寸增量都设计成与常用Material Design间距对齐。这些类可以使用`{property}{direction}-{size}这个格式来应用。`.',
  propertyText: '占位符 _property_ 用来设置间距的类型：',
  properties: [
    '`m` - 对应 `margin`',
    '`p` - 对应 `padding`'
  ],
  directionText: '占位符 _direction_ 指定属性所应用到的方向：',
  directions: [
    '`t` - 对应`margin-top`或者`padding-top`属性',
    '`b` - 对应`margin-bottom` or `padding-bottom`',
    '`l` - 对应`margin-left` or `padding-left`',
    '`r` - 对应`margin-right` or `padding-right`',
    '`x` - 同时对应`*-left`和`*-right`属性',
    '`y` - 同时对应`*-top`和`*-bottom`属性'
  ],
  sizeText: '占位符 _size_ 控制属性的增量：',
  sizes: [
    '`0` - 将`margin`或者`padding`设置为0，会使这些属性被删除',
    '`1` - 将`margin`或者`padding`属性设置为`$spacer * .25`',
    '`2` - 将`margin`或者`padding`属性设置为`$spacer * .5`',
    '`3` - 将`margin`或者`padding`属性设置为`$spacer`',
    '`4` - 将`margin`或者`padding`属性设置为`$spacer * 1.5`',
    '`5` - 将`margin`或者`padding`属性设置为`$spacer * 3`'
  ],
  horizontalHeader: '水平居中',
  horizontalText: '对于具有指定宽度的块元素，可以使用`.mx-auto`来使它的内容水平居中'
}
