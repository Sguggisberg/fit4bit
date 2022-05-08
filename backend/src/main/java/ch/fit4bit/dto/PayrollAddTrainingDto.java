package ch.fit4bit.dto;

import java.util.Set;

public class PayrollAddTrainingDto {

	private Long id;
	private Set<Long> trainingIds;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Set<Long> getTrainingIds() {
		return trainingIds;
	}
	public void setTrainingIds(Set<Long> trainingIds) {
		this.trainingIds = trainingIds;
	}

}
