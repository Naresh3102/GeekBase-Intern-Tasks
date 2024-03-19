class BankA extends Bank {
    private int balance;

    BankA(int balance) {
        this.balance = balance;
    }

    @Override
    int getBalance() {
        return balance;
    }
}