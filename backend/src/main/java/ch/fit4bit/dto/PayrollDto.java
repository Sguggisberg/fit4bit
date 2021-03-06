package ch.fit4bit.dto;

import java.io.Serializable;
import java.util.Set;

import ch.fit4bit.entity.User;
import ch.fit4bit.model.BillState;
import ch.fit4bit.utils.Month;
import com.fasterxml.jackson.annotation.JsonInclude;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PayrollDto implements Serializable {
	private static final long serialVersionUID = -8431435193022299051L;

	public PayrollDto() {

	}

	public PayrollDto(Month month, int year, BillState billState) {
		this.month = month;
		this.year = year;
		this.billState = billState;
	}

	private Long id;

	private User user;
	private Set<TrainingDTO> trainings;

	private Month month;

	private int year;
	
	private BillState billState;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Set<TrainingDTO> getTrainings() {
		return trainings;
	}

	public void setTrainings(Set<TrainingDTO> trainings) {
		this.trainings = trainings;
	}
	
	public void addTraining(TrainingDTO trainingDTO) {
		this.trainings.add(trainingDTO);
	}

	public Month getMonth() {
		return month;
	}

	public void setMonth(Month month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public BillState getBillState() {
		return billState;
	}

	public void setBillState(BillState billState) {
		this.billState = billState;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
