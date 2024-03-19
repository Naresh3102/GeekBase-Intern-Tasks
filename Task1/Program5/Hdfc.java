class Hdfc implements Notification {
    @Override
    public void notificationBySms() {
        System.out.println("HDFC - Notification by SMS");
    }

    @Override
    public void notificationByEmail() {
        System.out.println("HDFC - Notification by Email");
    }

    @Override
    public void notificationByCourier() {
        System.out.println("HDFC - Notification by Courier");
    }
}