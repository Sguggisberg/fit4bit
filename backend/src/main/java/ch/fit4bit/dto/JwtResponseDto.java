package ch.fit4bit.dto;


import java.io.Serializable;

public class JwtResponseDto implements Serializable {

	private static final long serialVersionUID = 5780051450534091753L;
	private final String jwttoken;

	public JwtResponseDto(String jwttoken) {
		this.jwttoken = jwttoken;
	}

	public String getToken() {
		return this.jwttoken;
	}
}