public class Main {
    public static void main(String[] args) {
        int id = 45;
        String name = "Sherin";
        String departmentName = "CSE";

        Department department = new Department(id, departmentName);
        Student originalEmployee = new Student(id, name, department);

        // Printing Original Employee
        System.out.println("Original:- " + originalEmployee);

        // Printing Cloned Employee
        Student clonedEmployee = new Student(originalEmployee);
        System.out.println("Duplicate:- " + clonedEmployee);
    }
}