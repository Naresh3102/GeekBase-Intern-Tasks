class Department {
    private String name;
    private int id;

    public Department(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Copy constructor
    public Department(Department oldDepartment) {
        this.id = oldDepartment.id;
        this.name = oldDepartment.name;
    }

    // getter and setter
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

    @Override
    public String toString() {
        return "Department Id: " + id + "\nDepartment: " + name;
    }
}