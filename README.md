# destructuring
<p><i>I like these destructuring tools, some of the syntax can be tricky. I'll need to put it into practice to not forget the gotcha's. Seems like destructuring makes the code much simpler once fully understood / put into practice</i></p>
<ul> <h4>A few key points that needed some review for me to complete</h4>
<li>destructure arr/object in function's at parameter (input)</li>
<ul>
<li><i>--example--</i> <br>
<b>const func = ([first, second, ...rest]) => ({first, second, rest})</b></li>
</ul>
<li>Nested destructuring</li>
<ul>
<li>
<i>--example--</i> <br>
<b> const obj = { numbers: { a: 1, b: 2 } };<br>
const {
  numbers: { a, b },
} = obj;</b></li>
</ul>
</ul>
<br>
