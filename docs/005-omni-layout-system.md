# Chapter 4 - Omni Layout System

## Pushing the limits of Layout Systems
OmniLayout system is a carefully designed layout system that provides a set of classes to control the layout of an element. It is based on a 12-column layout and provides responsive utility classes for controlling the column span and positioning of grid items.

Grid System
The OmniLayout grid system is based on a 12-column layout and provides responsive utility classes for controlling the column span and positioning of grid items.

<div class="omni-grid">
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">...</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">...</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">...</div>
</div>



In the example above, the grid items will span the full 12 columns on small screens, 6 columns on medium screens (≥768px), and 4 columns on large screens (≥992px).

Column Start/End
You can control the start and end positions of grid items using the .omni-start-* and .omni-end-* utility classes.

<div class="omni-grid">
  <div class="omni-span-6 omni-start-md-3">Start at Column 3 (md)</div>
  <div class="omni-span-6 omni-end-lg-11">End at Column 11 (lg)</div>
</div>



Nested Grids
OmniLayout supports nested grid layouts using the .omni-nest class.

<div class="omni-grid">
  <div class="omni-span-12 omni-span-md-6">
    <div class="omni-nest">
      <div class="omni-span-6">6 Columns</div>
      <div class="omni-span-6">6 Columns</div>
    </div>
  </div>
  <div class="omni-span-12 omni-span-md-6">
    <div class="omni-nest">
      <div class="omni-span-4">4 Columns</div>
      <div class="omni-span-8">8 Columns</div>
    </div>
  </div>
</div>



Flex System
The OmniLayout flex system provides a flexible way to create responsive layouts using flexbox.

<div class="omni-flex">
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-3">Flex Item</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-3">Flex Item</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-3">Flex Item</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-3">Flex Item</div>
</div>



Flex Order
You can control the order of flex items using the .omni-order-* utility classes.

<div class="omni-flex">
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-3 omni-order-4">Order 4</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-3 omni-order-3">Order 3</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-3 omni-order-2">Order 2</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-3 omni-order-1">Order 1</div>
</div>



Hybrid System
The OmniLayout hybrid system combines the power of CSS Grid and Flexbox, allowing you to create complex and responsive layouts.

<div class="omni-hybrid">
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">Grid Item</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">Grid Item</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">Flex Item</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">Flex Item</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">Grid Item</div>
  <div class="omni-span-12 omni-span-md-6 omni-span-lg-4">Flex Item</div>
</div>



Utilities
OmniLayout provides a wide range of utility classes for controlling layout, spacing, and more.

.omni-push-left, .omni-push-right: Add left or right margin to an element.
.omni-pull-left, .omni-pull-right: Add negative left or right margin to an element.
.omni-justify-*: Control the justification of flex containers.
.omni-align-*: Control the alignment of flex items.
Advanced Features
Masonry Layout
OmniLayout supports masonry-style layouts using the .omni-masonry class and the grid-row property.

<div class="omni-masonry">
  <div class="omni-span-4" style="grid-row: span 2;">Masonry Item</div>
  <div class="omni-span-4">Masonry Item</div>
  <div class="omni-span-4" style="grid-row: span 3;">Masonry Item</div>
  <div class="omni-span-4">Masonry Item</div>
  <div class="omni-span-4">Masonry Item</div>
  <div class="omni-span-4" style="grid-row: span 2;">Masonry Item</div>
</div>



Stack Layout
OmniLayout provides a .omni-stack class for creating vertical stacks of elements using flexbox.

<div class="omni-stack">
  <div>Stacked Item</div>
  <div>Stacked Item</div>
  <div>Stacked Item</div>
</div>



