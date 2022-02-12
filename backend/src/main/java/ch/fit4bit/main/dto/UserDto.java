package ch.fit4bit.main.dto;

public class UserDto  {

	private static final long serialVersionUID = 6925823811738245033L;

	public UserDto() {

	}

	public UserDto(String username, String vorname, String name, String passwort) {
		this.lastName = name;
		this.username = username;
		this.passwort = passwort;
		this.firstName = vorname;
	}


	private Long id;
	private String lastName;
	private String firstName;
	private String email;
	private String passwort;
	private String username;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswort() {
		return passwort;
	}

	public void setPasswort(String passwort) {
		this.passwort = passwort;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	
	
}
