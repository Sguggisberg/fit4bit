package ch.fit4bit.main.dto;

import java.io.Serializable;

public class TrainingTypImageDto implements Serializable{

	private static final long serialVersionUID = 3677476867436088390L;

	private Long id;
	
	private byte[] image;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}	
	
}
