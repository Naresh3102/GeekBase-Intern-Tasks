package com.example.Signupbackend.service.impl;

import com.example.Signupbackend.dto.UserDto;
import com.example.Signupbackend.entity.User;
import com.example.Signupbackend.mapper.UserMapper;
import com.example.Signupbackend.repository.UserRepository;
import com.example.Signupbackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    @Override
    public UserDto createUser(UserDto userDto) {


        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);

        return UserMapper.mapToUserDto(savedUser);
    }
}
