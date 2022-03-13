package ch.fit4bit.main.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;


public class TrainingDTO implements Serializable {

	private static final long serialVersionUID = 5758383809044398398L;

		private Long id;
	
	@JsonProperty("user")
	private UserDto userDTO;
	
	@JsonProperty("trainingTyp")
	private TrainingTypDTO trainingTypDTO;
	
	@JsonProperty("room")
	private RoomDto roomDto;
	
	private LocalDateTime runningDate;
	
	private int duration;

	private int amountOfCustomer;

	private Boolean isDeleted;

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDateTime getRunningDate() {
		return runningDate;
	}

	public void setRunningDate(LocalDateTime runningDate) {
		this.runningDate = runningDate;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
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

	public TrainingTypDTO getTrainingTypDTO() {
		return trainingTypDTO;
	}

	public void setTrainingTypDTO(TrainingTypDTO trainingTypDTO) {
		this.trainingTypDTO = trainingTypDTO;
	}

	public UserDto getUserDTO() {
		return userDTO;
	}

	public void setUserDTO(UserDto userDTO) {
		this.userDTO = userDTO;
	}

	public RoomDto getRoomDto() {
		return roomDto;
	}

	public void setRoomDto(RoomDto roomDto) {
		this.roomDto = roomDto;
	}
	
	
		
}
