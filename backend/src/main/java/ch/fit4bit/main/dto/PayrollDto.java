package ch.fit4bit.main.dto;

import java.io.Serializable;
import java.util.List;

import ch.fit4bit.model.BillState;
import ch.fit4bit.utils.Month;

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
	
	private List<TrainingDTO> trainings;

	private Month month;

	private int year;
	
	private BillState billState;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<TrainingDTO> getTrainings() {
		return trainings;
	}

	public void setTrainings(List<TrainingDTO> trainings) {
		this.trainings = trainings;
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
}
