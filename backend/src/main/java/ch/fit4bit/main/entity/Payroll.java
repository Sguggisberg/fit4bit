package ch.fit4bit.main.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import ch.fit4bit.model.BillState;
import ch.fit4bit.utils.Month;

@Entity
public class Payroll implements Serializable {

	private static final long serialVersionUID = 7036544018331437122L;

	public Payroll() {

	}

	public Payroll(Month month, int year, BillState billState) {
		this.month = month;
		this.year = year;
		this.billState = billState;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToMany
	private List<Training> trainings;

	private Month month;

	private int year;
	
	private BillState billState;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Training> getTrainings() {
		return trainings;
	}

	public void setTrainings(List<Training> trainings) {
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
