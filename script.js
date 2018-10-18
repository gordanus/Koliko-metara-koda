function count() {
    var total = document.getElementById("text").value;
    total = total.replace(/\s/g, '');
    var total2 = +document.getElementById("text").value.length;
    var totalInMeter = total2 * 0.00211666666666669;

    document.getElementById("total").innerHTML = `Ukupno karaktera: ${total.length}`;
    document.getElementById("totalInMeter").innerHTML = 'Ukupno metara koda: ' + totalInMeter.toFixed(2) + ' m';
}

function store(name) {
    var old = localStorage.getItem(name);
    var inputLength = document.getElementById("totalInMeter").textContent;
    if (old === null) old = "";
    localStorage.setItem(name, old + inputLength);

    //    var inputLength = document.getElementById("totalInMeter").textContent;
    //    localStorage.setItem("length", inputLength);
}

function readData() {
    var storedValue = localStorage.getItem("length");
    document.getElementById("output").innerHTML = storedValue;
}


function buildData() {
    var txtData = $("#output").text();
    return txtData;
}

$(function () {

    $("#submitLink").click(function (event) {
        var txtData = buildData();
        var date = new Date($.now());
        $(this).attr('download', function () {
                return date.toUTCString() + '.txt';
            })
            .attr('href', "data:application/octet-stream;base64," + Base64.encode(txtData));
    });
})