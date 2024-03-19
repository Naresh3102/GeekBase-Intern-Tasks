import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int bankCode = scanner.nextInt();
        int notificationType = scanner.nextInt();

        Notification notification = null;

        if (bankCode == 1) {
            notification = new Icici();
        } else if (bankCode == 2) {
            notification = new Hdfc();
        } else {
            System.out.println("Invalid Bank code. Please enter valid code(1 for ICICI and 2 for HDFC)");
            return;
        }

        switch (notificationType) {
            case 1:
                notification.notificationBySms();
                break;
            case 2:
                notification.notificationByEmail();
                break;
            case 3:
                notification.notificationByCourier();
                break;
            default:
                System.out.println("Invalid Notification Type. Please enter a valid type (1 for SMS, 2 for Email and 3 for Courier)");
        }

        scanner.close();
    }
}