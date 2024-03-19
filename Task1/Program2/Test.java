import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        String[] part = input.split(" ");

        int gears = Integer.parseInt(part[0]);
        int speed = Integer.parseInt(part[1]);
        int seatHeight = Integer.parseInt(part[2]);

        MontaneBike bike = new MontaneBike(gears, speed, seatHeight);
        System.out.println(bike);

        scanner.close();
    }
}