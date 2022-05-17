package ch.fit4bit.exception;

public class ElementAlreadyExistException  extends Exception {
    public ElementAlreadyExistException(String errorMessage){
        super(errorMessage);
    }
}
