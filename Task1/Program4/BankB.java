class BankB extends Bank {
    private int balance;

    BankB(int balance) {
        this.balance = balance;
    }

    @Override
    int getBalance() {
        return balance;
    }
}