package com.qa.project.presentation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.qa.project.business.SellerService;
import com.qa.project.persistence.domain.SellerDomain;

@RestController
public class SellerController {
    private SellerService service;

    public SellerController(SellerService service) {
        this.service = service;
    }

    private List<SellerDomain> sellerDomains = new ArrayList<>();

    @GetMapping("/getAll")
    public List<SellerDomain> getAll() {
        return this.service.getAll();
    }

    @GetMapping("/get/{id}")
    public SellerDomain getById(@PathVariable Integer id) {
        return this.service.getById(id);
    }

    @PostMapping("/create")
    public SellerDomain createSellerDomain(@RequestBody SellerDomain sellerDomain) {
        return this.service.createSellerDomain(sellerDomain);
    }

    @DeleteMapping("/remove/{id}") 
    public SellerDomain removeSellerDomain(@PathVariable int id) {
        return this.service.removeSellerDomain(id);
    }

    @PatchMapping("/update/{id}")
    public SellerDomain updateSellerDomain(@PathVariable Integer id,
                                           @RequestParam(required = false) String firstName, 
                                           @RequestParam(required = false) String surname,
                                           @RequestParam(required = false) String email, 
                                           @RequestParam(required = false) String telephone) {
        return this.service.updateSellerDomain(id, firstName, surname, email, telephone);
    }
}