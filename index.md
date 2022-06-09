<!DOCTYPE html>
<html>
    <head>
        <title>Web App - Simple Interest Calculator</title>
        <script src="script.js"></script>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="maindiv">
            <h1>Simple Interest Calculator</h1>
            <div id="content">
            <label for="principal">Amount</label> <input type="number"  id="principal" name="principal">  <br/><br/>
            <label for="interest">Interest Rate</label> <input type="range"  id="rate" name="interest" min="1" max="20" value="10.25" step="0.25" onchange="updateRate()">
            <span id="rate_val">
                10.25%
            </span>  <br/><br/>
            <label for="years">No. of Years</label> <select id="years" name="years">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select><br/><br/>
            <button onclick="compute()">Compute Interest</button><br/>
            <span id="result"></span><br/><br/>
        </div>
            <footer>
                <p>&#169; Everyone Can Get Rich<br>This Calculator belongs to Irene Rubio</p>
            </footer>
        </div>
    </body>
</html>

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
