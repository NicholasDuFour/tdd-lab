/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {

    constructor(amountDue) {
        this.amountDue = amountDue.amountDue;
        this.cashTendered = amountDue.cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      if (type === "quarter") {
        this.cashTendered += 25;
      } else if (type === "dime") {
        this.cashTendered += 10;
      } else if (type === "nickel") {
        this.cashTendered += 5;
      } else if (type === "penny") {
        this.cashTendered += 1;
      } else {
        this.cashTendered += 0;
      }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if (this.cashTendered >= this.amountDue) {
        return true;
      } else {
        return false;
      }
    }

    giveChange() {
      this.cashTendered - this.amountDue;
      while (this.cashTendered > 0){


        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
      }

        // TODO return the correct change in the following format...

    } //end of giveChange
} //end of ChangeHandler
