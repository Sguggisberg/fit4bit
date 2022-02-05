package ch.fit4bit.main.dto;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

public class UserDto  {

	private static final long serialVersionUID = 6925823811738245033L;

	public UserDto() {

	}

	public UserDto(String username, String vorname, String name, String passwort) {
		this.name = name;
		this.username = username;
		this.passwort = passwort;
		this.vorname = vorname;
	}


	private Long id;
	private String name;
	private String vorname;
	private String passwort;
	private String username;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getVorname() {
		return vorname;
	}


	public void setVorname(String vorname) {
		this.vorname = vorname;
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
