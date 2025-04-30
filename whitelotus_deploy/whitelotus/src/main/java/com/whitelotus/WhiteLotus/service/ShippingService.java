package com.whitelotus.WhiteLotus.service;

import com.whitelotus.WhiteLotus.exception.ShippingNotFoundException;
import com.whitelotus.WhiteLotus.model.Shipping;
import com.whitelotus.WhiteLotus.repository.ShippingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShippingService {
    private final ShippingRepository shippingRepository;

    @Autowired
    public ShippingService(ShippingRepository shippingRepository) {
        this.shippingRepository = shippingRepository;
    }

    public List<Shipping> shippingList() {
        return shippingRepository.findAll();
    }

    public Shipping createShipping(Shipping newShipping){
        return shippingRepository.save(newShipping);
    }

    public Shipping findShippingById (Long id) {
        return  shippingRepository.findById(id).orElseThrow(()->new ShippingNotFoundException(id));
    }

    public void deleteShipping (Long id) {
        if (shippingRepository.existsById(id)) {
            shippingRepository.deleteById(id);
        } else {
            throw new ShippingNotFoundException(id);
        }
    }
    public Shipping updateShipping(Shipping shipping, Long id) {
        return shippingRepository.findById(id).map(shippingMapping -> {
            shippingMapping.setDateShipping(shipping.getDateShipping());
            shippingMapping.setCalleNumero(shipping.getCalleNumero());
            shippingMapping.setDelegacion(shipping.getDelegacion());
            shippingMapping.setCodigoPostal(shipping.getCodigoPostal());
            return shippingRepository.save(shippingMapping);
        }).orElseThrow(()-> new ShippingNotFoundException(id));
    }
}
