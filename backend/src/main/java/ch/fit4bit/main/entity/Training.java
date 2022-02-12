package ch.fit4bit.main.entity;

import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;


@Entity
public class Training implements Serializable {

	private static final long serialVersionUID = -6924934677216629834L;

	public Training() {
		this.isDeleted = false;
	}

	public Training(TrainingTyp trainingTyp, LocalDateTime runningDate, int amountOfCustomer, Boolean isDeleted, User user) {
		super();
		this.trainingTyp = trainingTyp;
		this.runningDate = runningDate;
		this.amountOfCustomer = amountOfCustomer;
		this.isDeleted = isDeleted;
		this.user = user;
	
		this.isDeleted = false;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	private User user;

	@ManyToOne
	private TrainingTyp trainingTyp;


	@CreationTimestamp
	private LocalDateTime dateCreated;

	@CreationTimestamp
	private LocalDateTime lastUpdate;

	private LocalDateTime runningDate;

	private int amountOfCustomer;

	private int duration;

	private Boolean isDeleted;

	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public TrainingTyp getTrainingTyp() {
		return trainingTyp;
	}

	public void setTrainingTyp(TrainingTyp trainingTyp) {
		this.trainingTyp = trainingTyp;
	}

	public LocalDateTime getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(LocalDateTime dateCreated) {
		this.dateCreated = dateCreated;
	}

	public LocalDateTime getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(LocalDateTime lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public LocalDateTime getRunningDate() {
		return runningDate;
	}

	public void setRunningDate(LocalDateTime runningDate) {
		this.runningDate = runningDate;
	}

	public int getAmountOfCustomer() {
		return amountOfCustomer;
	}

	public void setAmountOfCustomer(int amountOfCustomer) {
		this.amountOfCustomer = amountOfCustomer;
	}

	public Boolean getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

}
