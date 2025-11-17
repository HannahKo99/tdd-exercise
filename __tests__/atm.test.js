import { ATM } from "../src/atm";
//3A原則
describe("存錢功能", () => {
    it("可以存錢", ( ) => {
        const atm = new ATM(10);
        atm.deposit(5);
        expect(atm.balance( )).toBe(15);
    });

    it("不可以存 0 元或負的金額", () => {
        // 1. 建立 ATM
        const atm = new ATM(10);

        // 2. 存錢
        expect(() => {
            atm.deposit(0);
        }).toThrow("金額不得為 0");

        expect(() => {
            atm.deposit(-2);
        }).toThrow("金額不得為負值");
    });
});

describe("領錢功能", () => {
    it("可以領錢", () => {
        // 1. 建立 ATM
        const atm = new ATM(100);
        // 2. 領錢
        const amount = atm.withdraw(45);
        // 3. 餘額
        expect(amount).toBe(45);
        expect(atm.balance()).toBe(55);
    });

    it("不能領 0 元或是負的金額", () => {
        // 1. 建立 ATM
        const atm = new ATM(100);
        // 2. 領錢
        expect(() => {
            atm.withdraw(0);
        }).toThrow("金額不得為 0");

        expect(() => {
            atm.withdraw(-2);
        }).toThrow("金額不得為負值");
    });

    it("不能領超過本身餘額", () => {
        // 1. 建立 ATM
        const atm = new ATM(100);
        // 2. 領錢
        expect(() => {
            atm.withdraw(110);
        }).toThrow("餘額不足");
    });
});

