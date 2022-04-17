package ch.fit4bit.main.entity;

public enum Role {
	ROLE_TRAINER(0), ROLE_USER(1), ROLE_ADMIN(2), ROLE_SUPERIOR(3), ROLE_FINANCE(4);
	
	private int value; 
	
	private Role(int value) { this.value = value; }

	
}
