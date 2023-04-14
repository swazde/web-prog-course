# Lab 5: Nested List

In HTML, a nested list is a list that is contained within another list. A nested list can be used to group related items together and create a hierarchy of information on a webpage.

To create a nested list in HTML, you use the `<ul>` or `<ol>` tag to create the outer list and then nest another `<ul>` or `<ol>` tag inside each list item (`<li>`) of the outer list to create the inner list. For example:

```html
<ul>
  <li>Outer List Item 1
    <ul>
      <li>Inner List Item 1</li>
      <li>Inner List Item 2</li>
    </ul>
  </li>
  <li>Outer List Item 2</li>
  <li>Outer List Item 3</li>
</ul>
```
  
This code creates an unordered (bulleted) list with three items. The first item has an inner unordered list with two items. The resulting list will look like this:
```
- Outer List Item 1
    - Inner List Item 1
    - Inner List Item 2
- Outer List Item 2
- Outer List Item 3
```

  You can also use the `<ol>` tag to create an ordered (numbered) list, and you can nest multiple levels of lists within each other to create even more complex hierarchies of information. By properly nesting your lists, you can create well-organized and easy-to-read content on your webpage.

## Instructions
1. You are required to create the following website interface:
<img src="https://github.com/cwenghowe/web-prog-course/blob/main/lab/html/lab5/download/lab5.png"  height="700" />
2. You can view the entire website generated by referring to the [lab5.png](./download/lab5.png) file.
3. Text content has been prepared and saved in the [Lab5.txt](./download/Lab5.txt) file. 
4. Please include your contact information in the HTML `<head>`.

```html
<!--
Name:
Matrix No:
Github id:

Lab 5: Nested List
-->
```

5. You must place your file in the [submission](./submission) folder. Within the [submission](./submission) folder, create a folder called your `id github`. Name the file as `L5_Githubid.html`.
  > Example: 
  > /submission/cwenghowe/L5_cwenghowe.html