
class Order {
    constructor() {
        this.ingredients = [];
    }

    // crea una nueva variable en lugar de usar el setter
    // set setIngredient(ingredient) {
    //     // this.ingredients.push(ingredient);
    //     this.ingridients.push(ingredient);
    // }
    // set setPizzaSize(size) {
    //     this.pizzaSize = size;
    // }

    //set addressing(adressingInfo) {
    //    this.addressing = adressingInfo;
    //}

}

class AddressingInfo {
    constructor(street, zip, phoneN, name, email) {
        this.street = street;
        this.zip = zip;
        this.phone = phoneN;
        this.fullname = name;
        if (email !== undefined && email != "") this.email = email;
    }

    set street(street) {
        this._street = street;
    }
    set zip(zip) {
        this._zip = zip;
    }
    set phone(phone) {
        this._phone = phone;
    }
    set fullname(name) {
        this._fullname = name;
    }
    set email(email) {
        this._email = email;
    }

    get street() {
        return this._street;
    }
    get zip() {
        return this._zip;
    }
    get phone() {
        return this._phone;
    }
    get fullname() {
        return this._fullname;
    }
    get email() {
        return this._email;
    }
}

let order = new Order();

window.onload = load();

function load() {
    if (window.location.pathname == "/") indexLoad();
    else if (window.location.pathname == "/Ingredientes") loadIngredient();
    else if (window.location.pathname == "/Total") loadTotal();
    else defaultLoad();
}

/*index script*/

var pizzaButton;

function indexLoad() {
    if (sessionStorage.getItem("order") != null) {
        order = JSON.parse(sessionStorage.getItem("order"));
        pizzaButton = document.getElementById(order.pizzaSize);
        pizzaButton.style.border = "5px solid #A53333";
    }
}
function defaultLoad() {
    if (sessionStorage.getItem("order") != null) {
        order = JSON.parse(sessionStorage.getItem("order"));
    }
}

function changeSize(id) {
    order.pizzaSize = id;
    if (pizzaButton) pizzaButton.style.border = "0";
    pizzaButton = document.getElementById(order.pizzaSize);
    pizzaButton.style.border = "5px solid #A53333";
}

function next() {
    if (order.pizzaSize) {
        window.location.href = "/Ingredientes";
        sessionStorage.setItem("order", JSON.stringify(order));
    } else alert("Por favor, seleccione un tamaño de pizza para avanzar");
}

function nextTotal() {
    if (order.pizzaSize) {
        window.location.href = "/Total";
        sessionStorage.setItem("order", JSON.stringify(order));
    } else alert("Por favor, seleccione un tamaño de pizza para avanzar");
}
/*ingredients script*/

var precio = 0;
var ingredientButton;

function calcPrice(order) {
    let price = 0;
    switch (order.pizzaSize) {
        case "chico":
            price = 80;
            break;
        case "mediano":
            price = 100;
            break;
        case "grande":
            price = 130;
            break;
    }
    price += (order.ingredients.length * 10);
    return price
}

function loadIngredient() {
    order = JSON.parse(sessionStorage.getItem("order"));
    document.getElementById("lblTag").innerText = "El costo de tu pizza chica es: $";
    document.getElementById("lblPrecio").innerText = calcPrice(order);

    order.ingredients.forEach(function (item) {
        document.getElementById('img' + item).style.display = "block";
        document.getElementById(item).style.border = "5px solid #A53333";
    })
}

function checkUncheck(id) {
    ingredientButton = document.getElementById(id);
    if (ingredientButton.style.border == "") {
        order.ingredients.push(id);
        ingredientButton.style.border = "5px solid #A53333";
    } else {
        order.ingredients = order.ingredients.filter(function (ele) {
            return ele != id;
        });
        ingredientButton.style.border = "";
    }

    let imgId = document.getElementById('img' + id);
    if (imgId.style.display === "none") imgId.style.display = "block";
    else imgId.style.display = "none";
    document.getElementById("lblPrecio").innerText = calcPrice(order);
}

function goBackSize() {
    window.location.href = "/";
    sessionStorage.setItem("order", JSON.stringify(order));
}

function totalOrder() {
    window.location.href = "/Total";
    sessionStorage.setItem("order", JSON.stringify(order));
}

/*total script*/


function loadTotal() {
    order = JSON.parse(sessionStorage.getItem("order"));
    document.getElementById("lblTotal").innerText = calcPrice(order);

}

function goBackIngr() {
    window.location.href = "/Ingredientes";
    sessionStorage.setItem("order", JSON.stringify(order));
}

function confirmOrder() {
    // window.location.href = "/Ingredientes";

    let inputName = document.getElementById("name-input").value;
    let inputStreet = document.getElementById("street-input").value;
    let inputZip = document.getElementById("zip-input").value;
    let inputPhone = document.getElementById("phone-input").value;
    let inputEmail = document.getElementById("email-input").value;

    let addInfo = new AddressingInfo(inputStreet, inputZip, inputPhone, inputName);
    order.addresing = addInfo;
    console.log(addInfo);

    sessionStorage.setItem("order", JSON.stringify(order));
    alert("Orden confirmada \n" + "Tu pizza tamanio "+ order.pizzaSize+" llegara en 30 minutos");
}
