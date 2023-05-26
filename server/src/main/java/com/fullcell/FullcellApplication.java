package com.fullcell;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties
@ComponentScan(basePackages = "com.fullcell.*")
@SpringBootApplication
public class FullcellApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullcellApplication.class, args);
	}

}
