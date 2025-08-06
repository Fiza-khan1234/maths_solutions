// Emoji array
    var emojis = ["🎉", "🎈", "🍭", "🍬", "🎲", "🎨", "🧸", "🧁", "🪄", "🍦"];

    var choice = prompt("What would you like to do?\n1. Forward Counting\n2. Backward Counting\n3. Multiplication Table\n\nType: forward / backward / table");

    document.write('<div class="output">');

    if (choice === "forward") {
      var start = parseInt(prompt("Enter the starting number for forward counting:"));
      var end = parseInt(prompt("Enter the ending number for forward counting:"));

      if (!isNaN(start) && !isNaN(end) && start <= end) {
        document.write("<h2>🔢 Forward Counting (" + start + " to " + end + ")</h2>");
        for (var i = start; i <= end; i++) {
          document.write("<p>" + emojis[Math.floor(Math.random() * emojis.length)] + " " + i + "</p>");
        }
      } else {
        document.write("<p class='error'>❌ Please enter valid numbers where starting ≤ ending!</p>");
      }

    } else if (choice === "backward") {
      var start = parseInt(prompt("Enter the starting number for backward counting:"));
      var end = parseInt(prompt("Enter the ending number for backward counting:"));

      if (!isNaN(start) && !isNaN(end) && start >= end) {
        document.write("<h2>🔙 Backward Counting (" + start + " to " + end + ")</h2>");
        for (var i = start; i >= end; i--) {
          document.write("<p>" + emojis[Math.floor(Math.random() * emojis.length)] + " " + i + "</p>");
        }
      } else {
        document.write("<p class='error'>❌ Please enter valid numbers where starting ≥ ending!</p>");
      }

    } else if (choice === "table") {
      var number = parseInt(prompt("Enter a number for the multiplication table:"));

      if (!isNaN(number)) {
        document.write("<h2>✖ Table of " + number + "</h2>");
        for (var i = 1; i <= 10; i++) {
          var result = number * i;
          document.write("<p>" + emojis[Math.floor(Math.random() * emojis.length)] + " " + number + " × " + i + " = " + result + "</p>");
        }
      } else {
        document.write("<p class='error'>❌ Please enter a valid number!</p>");
      }

    } else {
      document.write("<p class='error'>❌ Invalid choice! Please refresh and try again.</p>");
    }

    document.write('</div>');