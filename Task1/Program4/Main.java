import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int balanceA = scanner.nextInt();
        int balanceB = scanner.nextInt();
        int balanceC = scanner.nextInt();

        BankA bankA = new BankA(balanceA);
        BankB bankB = new BankB(balanceB);
        BankC bankC = new BankC(balanceC);

        System.out.println("Deposited Balance is = " + bankA.getBalance());
        System.out.println("Deposited Balance is = " + bankB.getBalance());
        System.out.println("Deposited Balance is = " + bankC.getBalance());
    }
}