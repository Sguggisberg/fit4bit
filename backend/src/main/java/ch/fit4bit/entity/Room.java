package ch.fit4bit.entity;

import ch.fit4bit.security.DataValidatorHelper;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Pattern;

@Entity
public class Room  implements Serializable  {

	private static final long serialVersionUID = 527822747328662724L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Pattern(regexp = DataValidatorHelper.NAME_REGEX)
	@Column(unique=true)
	private String name;
	
	private String imageName;
	
	private String imageType;
	
	@Column(length = 1000000)
	private byte[] imageByte;
	
	public Room() {

	}

	public Room(String name) {
		this.name = name;
	}

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

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getImageType() {
		return imageType;
	}

	public void setImageType(String imageType) {
		this.imageType = imageType;
	}

	public byte[] getImageByte() {
		return imageByte;
	}

	public void setImageByte(byte[] imageByte) {
		this.imageByte = imageByte;
	}




}
