import java.util.Scanner;

class PoolTable {
    public double length;
    public double width;
    public double pocketSize;

    public PoolTable(double length, double width, double pocketSize) {
        this.length = length;
        this.width = width;
        this.pocketSize = pocketSize;
    }

    public double calculatePerimeterTable() {
        return 2 * (length + width);
    }

    public double calculatePerimeterPocket() {
        return 2 * (length + width) + (4 * pocketSize);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double length = scanner.nextDouble();
        double width = scanner.nextDouble();
        double pocketSize = scanner.nextDouble();

        PoolTable poolTable = new PoolTable(length, width, pocketSize);

        double perimeterTable = poolTable.calculatePerimeterTable();
        double perimeterPocket = poolTable.calculatePerimeterPocket();

        System.out.printf("Perimeter of pool table: %.1f meters\n", perimeterTable);
        System.out.printf("Perimeter of pocket: %.1f meters\n", perimeterPocket);

        scanner.close();
    }
}