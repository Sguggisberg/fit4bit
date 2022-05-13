package ch.fit4bit.dto;

import java.io.Serializable;
import java.time.LocalDateTime;

import ch.fit4bit.entity.Payroll;
import com.fasterxml.jackson.annotation.JsonProperty;


public class TrainingDTO implements Serializable {

    private static final long serialVersionUID = 5758383809044398398L;

    private Long id;

    @JsonProperty("trainingTyp")
    private TrainingTypDTO trainingTypDTO;

    @JsonProperty("room")
    private RoomDto roomDto;

    @JsonProperty("payroll")
    private PayrollDto payrollDto;
    private LocalDateTime runningDate;

    private int duration;

    private int amountOfCustomer;


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

    public TrainingTypDTO getTrainingTypDTO() {
        return trainingTypDTO;
    }

    public void setTrainingTypDTO(TrainingTypDTO trainingTypDTO) {
        this.trainingTypDTO = trainingTypDTO;
    }


    public RoomDto getRoomDto() {
        return roomDto;
    }

    public void setRoomDto(RoomDto roomDto) {
        this.roomDto = roomDto;
    }

    public PayrollDto getPayrollDto() {
        return payrollDto;
    }

    public void setPayrollDto(PayrollDto payrollDto) {
        this.payrollDto = payrollDto;
    }
}
