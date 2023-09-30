package com.example.springserve.helpers;

public class OptionalGet 
{
    public static <T> T get(java.util.Optional<T> optional) 
    {
        return optional.isPresent() ? optional.get() : null;
    }

}
