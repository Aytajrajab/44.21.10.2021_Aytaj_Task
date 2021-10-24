class Profit{

    constructor(costPrice,sellPrice,inventory){
        this.costPrice = costPrice;
        this.sellPrice = sellPrice;
        this.inventory = inventory;
    }
    getProfit(){
        alert(((this.sellPrice-this.costPrice)*this.inventory).toFixed(0));
    }
}


let profit = new Profit();
profit.costPrice = Number(prompt("Enter cost price: "));
profit.sellPrice = Number(prompt("Enter sell price: "))
profit.inventory = Number(prompt("Inventory: "))

profit.getProfit()
