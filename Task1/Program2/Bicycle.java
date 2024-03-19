class Bicycle {
    protected int gears;
    protected int speed;

    public Bicycle(int gears, int speed) {
        this.gears = gears;
        this.speed = speed;
    }

    @Override
    public String toString() {
        return "No of gears are " + gears + "\nSpeed of bicycle is " + speed;
    }
}
