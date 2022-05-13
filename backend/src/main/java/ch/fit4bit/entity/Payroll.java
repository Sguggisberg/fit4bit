package ch.fit4bit.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

import ch.fit4bit.model.BillState;
import ch.fit4bit.utils.Month;

@Entity
public class Payroll implements Serializable {

    private static final long serialVersionUID = 7036544018331437122L;


    public Payroll() {

    }

    public Payroll(Month month, int year, BillState billState, User user) {
        this.month = month;
        this.year = year;
        this.billState = billState;
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy="payroll")
    private Set<Training> trainings;

    @ManyToOne
    private User user;
    private Month month;

    private int year;

    private BillState billState;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Training> getTrainings() {
        return trainings;
    }

    public void setTrainings(Set<Training> trainings) {
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
