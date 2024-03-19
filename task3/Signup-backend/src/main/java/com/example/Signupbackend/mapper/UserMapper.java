package com.example.Signupbackend.mapper;

import com.example.Signupbackend.dto.UserDto;
import com.example.Signupbackend.entity.User;

public class UserMapper {

    public static UserDto mapToUserDto(User user) {
        return new UserDto(
                user.getId(),
                user.getUserName(),
                user.getEmail(),
                user.getMobileNumber(),
                user.getPassword()
        );
    }

    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getUsername(),
                userDto.getEmail(),
                userDto.getMobileNumber(),
                userDto.getPassword()
        );
    }
}
