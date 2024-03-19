package com.example.Signupbackend.service;

import com.example.Signupbackend.dto.UserDto;

public interface UserService {
    UserDto createUser(UserDto userDto);
}
