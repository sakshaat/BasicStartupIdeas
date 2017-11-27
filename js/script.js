$(function() {
    company_list.forEach(element => {
        $("#company-slot").append("<h3>" + element + "</h3>");
    }, this);

    industries_list.forEach(element => {
        $("#industry-slot").append("<h4>" + element + "</h4>")
    })

    var companyMachine = $("#company-slot").slotMachine({ active: 0, stopHidden: false, delay: 500 });

    var industryMachine = $("#industry-slot").slotMachine({ active: 0, stopHidden: false, delay: 500 });

    $("#shuffle-button").click(function() {
        if (companyMachine.running || companyMachine.stopping) return;
        companyMachine.shuffle(0, () => {
            industryMachine.shuffle(0, () => {})
        });
    })
})