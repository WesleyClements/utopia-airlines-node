package com.ss.utopia.auth.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LoginDto {
  @NotBlank
  @Size(min = 3)
  private String username;
  @NotBlank
  private String password;

  protected LoginDto() {
  }

  public LoginDto(@NotBlank String username, @NotBlank String password) {
    this.username = username;
    this.password = password;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
