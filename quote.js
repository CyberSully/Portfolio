window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   const endpoint = "https://wp.zybooks.com/quotes.php?topic=love&count=3";
   const queryString = "topic=${topic}&count=${count}";
   const url = "${endpoint}?${queryString}";

   const xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = "json";
   xhr.open("GET", url);
   xhr.send();
}
function responseReceivedHandler() {
   const quote = document.querySelector("#quotes");
   if (this.status === 200) {
      if (this.response.error) {
         quote.innerHTML = this.response.error;
      }
      else {
         let html = "<ol>";
         for (let quoteItem of this.response) {
            html += "<li>${quoteItem.quote} - ${quoteItem.source}</li>";
         }
         html += "</ol>";

         quote.innerHTML = html;
      }
   }
   else{
      quote.innerHTML = "quote is unavailable.";
   }
}

  /* let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
}

// TODO: Add responseReceivedHandler() here*/