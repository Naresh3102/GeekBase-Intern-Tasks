class MontaneBike extends Bicycle {
    private int seatHeight;

    public MontaneBike(int gears, int speed, int seatHeight) {
        super(gears, speed);
        this.seatHeight = seatHeight;
    }

    @Override
    public String toString() {
        return super.toString() + "\nSeat height is " + seatHeight;
    }
}