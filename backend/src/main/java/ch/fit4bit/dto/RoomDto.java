package ch.fit4bit.dto;

import java.io.Serializable;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import ch.fit4bit.security.DataValidatorHelper;


public class RoomDto  implements Serializable {

	private static final long serialVersionUID = 4508907237294878829L;
	
	@NotEmpty()
	@Pattern(regexp = DataValidatorHelper.NAME_REGEX)
	private String name;
	
	private Long id;
	
	public RoomDto() {
		
	}
	
	public RoomDto(String name) {
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
	
}
