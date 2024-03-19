class Icici implements Notification {
    @Override
    public void notificationBySms() {
        System.out.println("ICICI - Notification by SMS");
    }

    @Override
    public void notificationByEmail() {
        System.out.println("ICICI - Notification by Email");
    }

    @Override
    public void notificationByCourier() {
        System.out.println("ICICI - Notification by Courier");
    }
}