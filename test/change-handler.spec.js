describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
      const vendor = new ChangeHandler ({
        amountDue: 25
      });
      expect(vendor.amountDue).toBe(25);
    });
    it("initializes cashTendered to 0", function() {
      const vendor = new ChangeHandler ({
        cashTendered: 0
      })
      expect(vendor.cashTendered).toBe(0);
    });

    // Insert coin tests
    it("insert quarter adds 25", function() {
      const vendor = new ChangeHandler({
        cashTendered: 0
      })
      vendor.insertCoin("quarter");
      expect(vendor.cashTendered).toBe(25);

    });

    it("insert dime adds 10", function() {
      const vendor = new ChangeHandler({
        cashTendered: 0
      })
      vendor.insertCoin("dime");
      expect(vendor.cashTendered).toBe(10);
    });

    it("insert nickel adds 5", function() {
      const vendor = new ChangeHandler({
        cashTendered: 0
      })
      vendor.insertCoin("nickel");
      expect(vendor.cashTendered).toBe(5);

    });

    it("insert penny adds 1", function() {
      const vendor = new ChangeHandler({
        cashTendered: 0
      })
      vendor.insertCoin("penny");
      expect(vendor.cashTendered).toBe(1);

    });

    it("subsequent coins continue to add value", function() {
      const vendor = new ChangeHandler({
        cashTendered: 10
      })
      vendor.insertCoin("nickel");
      expect(vendor.cashTendered).toBe(15);
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
      const vendor = new ChangeHandler({
        cashTendered: 80,
        amountDue: 75
      })
        // expect(vendor.cashTendered).toBe(75);
        expect(vendor.isPaymentSufficient()).toBe(true);
    });

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
      const vendor = new ChangeHandler({
        cashTendered: 60,
        amountDue: 75
      })
        // expect(vendor.cashTendered).toBe(75);
        expect(vendor.isPaymentSufficient()).toBe(false);
    });

    it("isPaymentSufficient returns true when exact cashTendered", function() {
      const vendor = new ChangeHandler({
        cashTendered: 75,
        amountDue: 75
      })
        // expect(vendor.cashTendered).toBe(75);
        expect(vendor.isPaymentSufficient()).toBe(true);
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
      const vendor = new ChangeHandler({
        cashTendered: 75,
        amountDue: 75
      })
        expect(vendor.giveChange()).toEqual({
          quarters: 0,
          dimes: 0,
          nickels: 0,
          pennies: 0
        });
    });

    it("giveChange returns correct coins for 10", function() {
      const vendor = new ChangeHandler({
        amountDue: 25,
        cashTendered: 35
      })
        expect(vendor.giveChange()).toEqual({
            quarters: 0,
            dimes: 2,
            nickels: 0,
            pennies: 0
        });
    });

    it("giveChange returns correct coins for 27", function() {

    });

    it("giveChange returns correct coins for 68", function() {

    });

    it("giveChange returns correct coins for 15", function() {

    });

    it("giveChange returns correct coins for 2", function() {

    });

});
