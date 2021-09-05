package repositoryfullstack.Model;

public class Users {

    private String name;
    private String username;
    private Company company;
    private String email;

    public String getName() {
        return name;
    }

    public void setName( String name ) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername( String username ) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail( String email ) {
        this.email = email;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany( Company company ) {
        this.company = company;
    }
}
