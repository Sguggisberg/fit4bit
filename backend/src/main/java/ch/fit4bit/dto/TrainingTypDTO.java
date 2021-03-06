package ch.fit4bit.dto;

import java.io.Serializable;

public class TrainingTypDTO implements Serializable {

	private static final long serialVersionUID = 6304213182877781103L;

	private Long id;

	private String name;

	public TrainingTypDTO() {

	}

	public TrainingTypDTO(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "TrainingTypDTO [id=" + id + ", name=" + name + "]";
	}
}
