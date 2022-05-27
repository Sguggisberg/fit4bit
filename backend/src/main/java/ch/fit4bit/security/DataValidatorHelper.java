package ch.fit4bit.security;

public class DataValidatorHelper {

    public static final String NAME_REGEX = "([\\w\\d]){3,30}";
    public static final String PASSWORT_REGEX = "[a-zA-Z0-9_!#$%&]{4,30}";
    public static final String EMAIL_REGEX = "^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"; //  RFC 5322
}
