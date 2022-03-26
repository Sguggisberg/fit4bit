package ch.fit4bit.utils;

public class ValidatorHelper {
	
	private ValidatorHelper() {
		
	}
	
	public static final String NAME_REGEX = "([\\w\\d]){5,30}";
	public static final String NAME_ERROR_MESSAGE = "Min 5 Max 20 Zeichen, erlaubte Zeichen a-z, A-Z und 0-9";
	
	public static final String EMAIL_REGEX = "^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"; //  RFC 5322
	public static final String EMAIL_ERROR_MESSAGE = "Email Adresse nicht gütig";
	
	public static final String PASSWORT_REGEX = "[a-zA-Z0-9_!#$%&]{4,30}";
	public static final String PASSWORT_ERROR_MESSAGE = "Min 4 Max 30 Zeichen, erlaubte Zeichen a-z, A-Z, 0-9 oder _!#$%&";

}
