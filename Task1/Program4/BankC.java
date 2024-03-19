class BankC extends Bank {
    private int balance;

    BankC(int balance) {
        this.balance = balance;
    }

    @Override
    int getBalance() {
        return balance;
    }
}