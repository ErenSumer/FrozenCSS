# Chapter 3 - Getting Started With Frozencss

In this Chapter, we will start using basic utilities of Frozencss. Frozencss is a utility based and component based framework but what exactly is utility based and component based framework?

## Utility Based Frameworks

Utility-based means that when implementing designs, you use predefined classes to set font sizes, padding, margins, colors, etc on each individual item to create a custom element from the available options. The major perk of this is being able to customize elements independently, one at a time. Each element can be altered slightly without writing additional styles.<a href="#references">[1]</a>

## Component Based Frameworks

While utility-based options can function in any type of project, sometimes repetitive layouts can be best implemented with components: reusable, segmented blocks of predefined elements. Each element can have predefined styles and variations which limit how branding can be implemented and favors a single class per element rather than a series of utility classes to style it.<a href="#references">[2]</a>

## What about Frozencss?
Frozencss is a combination of both the above. It is a utility-based framework that provides a set of predefined classes to style elements. It also provides a set of components that can be used to create a custom design.

## Understanding Basic Utilities
Enough theory! Let's start coding! Let's start with the most basic utilities.
1. Typography
2. Colors
3. Sizing & Spacing

### 1. Typography
Typography is the most basic and important part of any website. It is the most visible part of the website and the first thing that people see. Frozencss provides a set of classes to style the text.
Some of them are listed below:
|Utility Class|Description|
|---|---|
|font-{font-family}|This pattern is used to set the font family of the text. The '{font-family}' part must be renamed by the font name. For example, if you want to use the font 'Roboto', you should rename the class to 'font-Roboto'.|
|text-center|Centers text.|
|text-{colorName}-{intensity}|recolors the text using the given color name and intensity. But intensity is actually not a number, it is a word like 'lighter', 'base', 'darker' etc. You can use any of these words to set the intensity of the color.|
### Colors
Colors are the second most important part of any website. They are the colors that are used to highlight the text, backgrounds, borders, etc. Frozencss provides a set of classes to style the colors.
Here are some of them:
|Utility Class|Description|
|---|---|
|bg-{colorName}-{intensity}|This class is used to set the background color of an element. The '{colorName}' part must be renamed by the color name. For example, if you want to use the color 'blue', you should rename the class to 'bg-blue'. The '{intensity}' part is optional and can be used to set the intensity of the color. It can be set to 'lighter', 'base', 'darker' etc.|
|border-{colorName}|This class is used to set the border color of an element. The '{colorName}' part must be renamed by the color name. For example, if you want to use the color 'blue', you should rename the class to 'border-blue'. |

### 3. Sizing & Spacing
Sizing and spacing are the third and fourth most important parts of any website. They are used to set the size of elements like padding, margin, width, height, etc. Frozencss provides a set of classes to style the sizing and spacing.
Here are some of them:
|Utility Class|Description|
|---|---|
|p-{size}|This class is used to set the padding of an element. The '{size}' part must be renamed by the size of the padding. For example, if you want to use the size '10', you should rename the class to 'p-10'.|
|m-{size}|This class is used to set the margin of an element. The '{size}' part must be renamed by the size of the margin. For example, if you want to use the size '10', you should rename the class to'm-10'.|
|w-{size}|This class is used to set the width of an element. The '{size}' part must be renamed by the size of the width. For example, if you want to use the size '10', you should rename the class to 'w-10'.|
|h-{size}|This class is used to set the height of an element. The '{size}' part must be renamed by the size of the height. For example, if you want to use the size '10', you should rename the class to 'h-10'.|

Now you know the basics, we will get to the next chapter and learn about one of the most powerful systems of Frozencss: OmniLayout.

Quick note that this example code will be in <code>examples/</code> folder.
Here is the link to the related code example:
[example](../examples/001-TributePage/index.html)

##### NOTE
This piece of code contains one of the most powerful Layout systems in CSS which is not yet mentioned. Don't worry, we will get to that in later chapters.

#### References:
<div id="references">
<a href="https://littlelines.com/blog/2019/04/30/component-vs-utility-based-css-design-systems">https://littlelines.com/blog/2019/04/30/component-vs-utility-based-css-design-systems</a>
</div>

###### Next: [Chapter 4 - Omni Layout System](./005-omni-layout-system.md)