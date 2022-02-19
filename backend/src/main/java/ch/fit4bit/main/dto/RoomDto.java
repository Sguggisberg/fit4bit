package ch.fit4bit.main.dto;

import java.io.Serializable;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import utils.ValidatorHelper;




public class RoomDto  implements Serializable {

	private static final long serialVersionUID = 4508907237294878829L;
	
	@NotEmpty(message = ValidatorHelper.NAME_ERROR_MESSAGE)
	@Pattern(regexp=ValidatorHelper.NAME_REGEX, message = ValidatorHelper.NAME_ERROR_MESSAGE)
	private String name;
	
	public RoomDto() {
		
	}
	
	public RoomDto(String name) {
		this.name = name;
	}
	


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
