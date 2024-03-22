package com.qa.project.springboot;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.project.persistence.domain.SellerDomain;
import com.qa.project.presentation.SellerController;

@SpringBootTest
@AutoConfigureMockMvc
public class SellerControllerMvcTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private ObjectMapper mapper;
    
    @Test
    void createTest() throws Exception {

        SellerDomain newSellerDomain = new SellerDomain("firstname", "surname", "email", "phone");
        String newSellerDomainAsJson = this.mapper.writeValueAsString(newSellerDomain);
        RequestBuilder mockRequest = MockMvcRequestBuilders.post("/create").contentType(MediaType.APPLICATION_JSON)
                                    .content(newSellerDomainAsJson);
        
        ResultMatcher checkStatus = MockMvcResultMatchers.status().isOk();
        SellerDomain createdSellerDomain = new SellerDomain("firstname", "surname", "email", "phone");
        createdSellerDomain.setId(1);
        String createdSellerDomainAsJson = this.mapper.writeValueAsString(createdSellerDomain);
        ResultMatcher checkBody = MockMvcResultMatchers.content().json(createdSellerDomainAsJson);

        this.mvc.perform(mockRequest).andExpect(checkStatus).andExpect(checkBody);

    }

    @Test
    void testUpdate() throws Exception {

        SellerDomain newSeller = new SellerDomain("firstname", "surname", "email", "phone");
        String newSellerJson = this.mapper.writeValueAsString(newSeller);
        RequestBuilder mockRequest = MockMvcRequestBuilders.patch("/update").contentType(MediaType.APPLICATION_JSON)
                                    .content(newSellerJson);

        ResultMatcher checkStatus = MockMvcResultMatchers.status().isOk();
        SellerDomain createdSeller = new SellerDomain("firstname", "surname", "email", "phone");
        String createdSellerJson = this.mapper.writeValueAsString(createdSeller);
        ResultMatcher checkBody = MockMvcResultMatchers.content().json(createdSellerJson);

        this.mvc.perform(mockRequest).andExpect(checkStatus).andExpect(checkBody);

    }
    
    @Test
    void testRemove() throws Exception {

        SellerDomain newSeller = new SellerDomain("firstname", "surname", "email", "phone");
        String newSellerJson = this.mapper.writeValueAsString(newSeller);
        RequestBuilder mockRequest = MockMvcRequestBuilders.delete("/remove").contentType(MediaType.APPLICATION_JSON)
                                    .content(newSellerJson);

        ResultMatcher checkStatus = MockMvcResultMatchers.status().isOk();
        SellerDomain createdSeller = new SellerDomain("firstname", "surname", "email", "phone");
        String createdSellerJson = this.mapper.writeValueAsString(createdSeller);
        ResultMatcher checkBody = MockMvcResultMatchers.content().json(createdSellerJson);

    }
}
