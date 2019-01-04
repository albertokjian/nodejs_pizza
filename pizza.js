const fs = require('fs');
const stage0 = "dough-prep";
const stage1 = "oven-bake";
const stage2 = "topping-art";
const stage3 = "done";
const type0 = "Veggie Lovers";
const type1 = "Meat Lovers";

class Pizza {
    // Constructor 
    constructor(type, contact) {
        this.type = type == 0 ? type0 : type1;
        this.contact = contact;
        this.status = stage0;
        this.interval = setInterval(this.updateStatus.bind(this), 5000);
    }

    // Check Contact
    checkContact(contact) {
        return this.contact == contact;
    }

    // Update Status of Pizza
    updateStatus() {
        switch (this.status) {
            case stage0:
                this.status = stage1;
                break;
            case stage1:
                this.status = stage2;
                break;
            case stage2:
                this.status = stage3;
                fs.writeFile(this.contact, "Your " + this.type + " is ready", function (err, result) {
                    if (err) console.log('error', err);
                });
                clearInterval(this.interval);
                break;
        }
    }
}

class Pizzas {
    // Constructor
    constructor() {
        this.queue = new Array();
    }

    // Add Pizza 
    addPizza(type, contact) {
        let newPizza = new Pizza(type, contact);
        this.queue.push(newPizza);
        console.log(this.queue);
        // this.updatePizzas();
    }

    // // Update All Pizzas
    // updatePizzas() {
    //     for (let p of this.queue) {
    //         p.updateStatus();
    //     }
    // }

    // Check Pizza Status 
    checkPizza(contact) {
        for (let p of this.queue) {
            if (p.checkContact(contact)) {
                return "Your " + p.type + "'s status is "+ p.status;
            }
        }
        return "No order from this contact";
    }
}

let pizzas = new Pizzas();
module.exports = pizzas;