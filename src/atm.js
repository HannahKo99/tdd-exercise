class ATM {
    constructor(original) {
        //original帳戶原始金額
        this.myMoney = original
        //this.myMoney餘額
    };

    deposit(addMoney) {
        //addMoney存進去的錢
        if(addMoney == 0) {
            throw "金額不得為 0";
        }

        if(addMoney < 0){
            throw "金額不得為負值";
        }

        this.myMoney = this.myMoney + addMoney;
    };

    withdraw(offMoney) {
        //offMoney領出來的錢
        if(offMoney == 0) {
            throw "金額不得為 0";
        }

        if(offMoney < 0){
            throw "金額不得為負值";
        }

        if(offMoney > this.balance()) {
            throw "餘額不足";
        }

        this.myMoney = this.myMoney - offMoney;
        return offMoney;
    };

    balance() {
        return this.myMoney;
        //balance這個函數會回傳this.myMoney這個值
    };

}

export{ ATM }