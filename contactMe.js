window.onload = function () {
    var contact = document.getElementById("div1");
    contact.className += " submission";
    var BFT = document.getElementById("BigFormTime");
    BFT.classList.remove("notused");
}

//Further validates First Name and Last Name
function validation() {
    var fname = document.querySelector(".CF input[name='firstname']").value;
    var lname = document.querySelector(".CF input[name='lastname']").value;
    var email = document.querySelector(".CF input[name='email']").value;
    var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //unacceptable chars

    if (pattern.test(fname) || pattern.test(lname)) {
        alert("Please only use standard alphanumerics");
        return false;
    }

    return true; //good user input
}

function contactMe(data) {
    var promise = validation();
    if (promise) {
        var XHR = new XMLHttpRequest();
        var urlEncodedData = "";
        var urlEncodedDataPairs = [];
        var name;

        // Turn the data object into an array of URL-encoded key/value pairs.
        for (name in data) {
            urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }

        // Combine the pairs into a single string and replace all %-encoded spaces to 
        // the '+' character; matches the behaviour of browser form submissions.
        urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

        // Set up our request
        XHR.open('POST', '');

        // Add the required HTTP header for form data POST requests
        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Finally, send our data.
        XHR.send(urlEncodedData);
        alert('Thank you for contacting me! I will reply as soon as I can.');
    }
}