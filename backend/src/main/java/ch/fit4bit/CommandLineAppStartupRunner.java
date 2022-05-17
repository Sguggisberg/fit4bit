package ch.fit4bit;

import ch.fit4bit.dao.PayrollRepository;
import ch.fit4bit.exception.ElementAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import ch.fit4bit.entity.Payroll;
import ch.fit4bit.entity.Role;
import ch.fit4bit.entity.Room;
import ch.fit4bit.entity.Training;
import ch.fit4bit.entity.TrainingTyp;
import ch.fit4bit.entity.User;
import ch.fit4bit.model.BillState;
import ch.fit4bit.service.PayrollService;
import ch.fit4bit.service.RoomService;
import ch.fit4bit.service.TrainingService;
import ch.fit4bit.service.TrainingTypService;
import ch.fit4bit.service.UserService;
import ch.fit4bit.utils.Month;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class CommandLineAppStartupRunner implements CommandLineRunner {

	private final UserService userService;
	private final TrainingTypService trainingTypService;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	private final RoomService roomService;
	private final TrainingService trainingService;
	private final PayrollService payrollService;

	private final PayrollRepository payrollRepository;

	@Autowired
	public CommandLineAppStartupRunner(UserService userService, TrainingTypService trainingTypService, RoomService roomService, BCryptPasswordEncoder bCryptPasswordEncoder, PayrollService payrollService
, TrainingService trainingService, PayrollRepository payrollRepository) {
		this.userService = userService;
		this.trainingTypService = trainingTypService;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
		this.roomService = roomService;
		this.trainingService = trainingService;
		this.payrollService = payrollService;
		this.payrollRepository = payrollRepository;
	}

	@Override
	public void run(String...args) throws ElementAlreadyExistException {

		// User anlegen
		User user1 = new User("trainer1@bla.ch", "Stefan", "Mueller",bCryptPasswordEncoder.encode("123456"), List.of(Role.ROLE_TRAINER));
		User user2 = new User("superior1@bla.ch", "Thomas", "Mueller2",bCryptPasswordEncoder.encode("123456"), List.of(Role.ROLE_SUPERIOR));
		User user3 = new User("finance1@bla.ch", "Klaus", "Mueller2",bCryptPasswordEncoder.encode("123456"), List.of(Role.ROLE_FINANCE));
		User user4 = new User("trainer2@bla.ch", "Nicole", "Mueller",bCryptPasswordEncoder.encode("123456"), List.of(Role.ROLE_TRAINER));
		
		
		user1 = userService.create(user1);
		user2 = userService.create(user2);
		user3 = userService.create(user3);
		user4 = userService.create(user4);		
		
		TrainingTyp tt1 = new TrainingTyp("Yoga");
		TrainingTyp tt2 = new TrainingTyp("Pialtes");
		TrainingTyp tt3 = new TrainingTyp("Spinning");
		TrainingTyp tt4 = new TrainingTyp("BBP");
		TrainingTyp tt5 = new TrainingTyp("Zumba");
		
		tt1 = trainingTypService.create(tt1);
		tt2 = trainingTypService.create(tt2);
		tt3 = trainingTypService.create(tt3);
		tt4 = trainingTypService.create(tt4);
		tt5 = trainingTypService.create(tt5);
		
		Room r1 = new Room("blue");
		Room r2 = new Room("red");
		
		r1 = roomService.create(r1);
		r2 = roomService.create(r2);

		Training t1 = new Training(tt1, LocalDateTime.of(2022, 6, 14, 20, 0), user1, r1, 55);

		Training t2 = new Training(tt1, LocalDateTime.of(2022, 6, 15, 20, 0), user1, r1, 55);	

		Training t3 = new Training(tt1, LocalDateTime.of(2022, 6, 16, 20, 0), user1, r1, 55);	
		trainingService.create(t3);
		
		Training t4 = new Training(tt2, LocalDateTime.of(2022, 6, 16, 19, 0), user1, r1, 55);	
		trainingService.create(t4);

		Training t5 = new Training(tt5, LocalDateTime.of(2022, 3, 11, 19, 0), user1, r2, 55);
		trainingService.create(t5);

		Training t6 = new Training(tt5, LocalDateTime.of(2022, 3, 12, 19, 0), user1, r1, 55);
		trainingService.create(t6);

		Training t7 = new Training(tt5, LocalDateTime.of(2022, 3, 13, 19, 0), user1, r2, 55);
		trainingService.create(t7);

		Training t8 = new Training(tt5, LocalDateTime.of(2022, 3, 14, 19, 0), user1, r2, 55);
		trainingService.create(t8);

		Training t29 = new Training(tt5, LocalDateTime.of(2022, 3, 15, 19, 0), user2, r2, 55);
		trainingService.create(t29);

		Training t11 = new Training(tt3, LocalDateTime.of(2022, 6, 14, 20, 0), user2, r2, 45);	
		trainingService.create(t11);
		
		Training t22 = new Training(tt1, LocalDateTime.of(2022, 6, 15, 17, 0), user2, r1, 55);	
		trainingService.create(t22);
		
		Training t33 = new Training(tt4, LocalDateTime.of(2022, 6, 14, 20, 0), user2, r1, 55);	
		trainingService.create(t33);
		
		Training t44 = new Training(tt2, LocalDateTime.of(2022, 6, 16, 14, 0), user1, r2, 55);
		t44 = trainingService.create(t44);
		
		Payroll p11 = new Payroll(Month.Juni, 2022, BillState.OFFEN, user1);
		Payroll p12 = new Payroll(Month.April, 2022, BillState.OFFEN, user1);
		Payroll p13 = new Payroll(Month.Februar, 2022, BillState.OFFEN, user1);
		Payroll p14 = new Payroll(Month.Januar, 2022, BillState.AUSBEZAHLT, user1);
		Payroll p21 = new Payroll(Month.Dezember, 2022, BillState.ABGELEHNT, user1);
		Payroll p22 = new Payroll(Month.April, 2022, BillState.OFFEN, user4);

		Payroll p15 = new Payroll(Month.Juni, 2023, BillState.ZUR_FREIGABE_1, user1);
		Payroll p16 = new Payroll(Month.April, 2023, BillState.ZUR_FREIGABE_1, user1);
		Payroll p17 = new Payroll(Month.Februar, 2023, BillState.ZUR_FREIGABE_1, user1);
		Payroll p18 = new Payroll(Month.Januar, 2023, BillState.ZUR_FREIGABE_1, user1);
		Payroll p23 = new Payroll(Month.Dezember, 2023, BillState.ZUR_FREIGABE_1, user2);
		Payroll p24 = new Payroll(Month.April, 2023, BillState.ZUR_FREIGABE_1, user4);

		payrollRepository.save(p11);
		payrollRepository.save(p12);
		payrollRepository.save(p13);
		payrollRepository.save(p14);
		payrollRepository.save(p15);
		payrollRepository.save(p16);
		payrollRepository.save(p17);
		payrollRepository.save(p18);

		payrollRepository.save(p21);
		payrollRepository.save(p22);
		payrollRepository.save(p23);
		payrollRepository.save(p24);

		t1.setAmountOfCustomer(10);
		t1.setPayroll(p12);
		trainingService.create(t1);

		t2.setAmountOfCustomer(5);
		t2.setPayroll(p12);
		trainingService.create(t2);

		t5.setAmountOfCustomer(12);
		t5.setPayroll(p13);
		trainingService.create(t5);

		t6.setAmountOfCustomer(10);
		t6.setPayroll(p15);
		trainingService.create(t6);;

		t7.setAmountOfCustomer(3);
		t7.setPayroll(p15);
		trainingService.create(t7);

		t8.setAmountOfCustomer(3);
		t8.setPayroll(p15);
		trainingService.create(t8);

		t29.setAmountOfCustomer(3);
		t8.setPayroll(p22);
		trainingService.create(t29);

	}
}


