const getRequestTypes = () => {
    $.ajax({
        method: "GET",
        url: "/types/getAll",
    })
    .done((data) => {
        const typeSelect = document.getElementById("type");
        data.forEach(element => {
            let option = document.createElement("option");
            option.text = element.name;
            option.value = element.id;
            typeSelect.append(option);
        });
    });
}

const getRequestSubTypes = (id) => {
    $.ajax({
        method: "GET",
        url: "/types/get/" + id,
    })
    .done((data) => {
        const subtypeSelect = document.getElementById("subtype");
        subtypeSelect.innerHTML = "";
        data._subtypes.forEach( element => {
            let option = document.createElement("option");
            option.text = element.name;
            option.value = element.id;
            subtypeSelect.append(option);
        });
    });
}

const checkForm = (ele) => {
    $(ele)
        .find('input[name]')
        .filter(function () {
            return !this.value;
        })
        .prop('name', '');
}

window.onload = () => {
    getRequestTypes();
}