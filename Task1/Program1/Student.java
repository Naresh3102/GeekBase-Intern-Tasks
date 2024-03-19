class Student {
    private String name;
    private int id;
    private Department department;

    public Student(int id, String name, Department department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    // Copy constructor
    public Student(Student oldStudent) {
        this.id = oldStudent.id;
        this.name = oldStudent.name;
        this.department = new Department(oldStudent.department);
    }

    // Getter and setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "\nId: " + id + "\nName: " + name + "\n" + department;
    }
}