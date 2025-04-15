package com.whitelotus.WhiteLotus.repository;

import com.whitelotus.WhiteLotus.model.Shipping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingRepository  extends JpaRepository <Shipping, Long> {

}
