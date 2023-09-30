package com.example.springserve.region;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class RegionService {

    @Autowired(required = false)
    private RegionRepository regionRepository;

    public List<Region> getAllRegions() {
        return regionRepository.findAll();
    }

    public Region saveRegion(Region region) {
        return regionRepository.save(region);
    }

    public Optional<Region> getRegionById(Long id) {
        Optional<Region> res = regionRepository.findById(id);
        return res;
    }

    public void deleteRegion(Long id) {
        regionRepository.deleteById(id);
    }
}
